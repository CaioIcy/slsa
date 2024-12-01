#!/usr/bin/env npx vite-node --script

import * as path from 'path';
import * as fs from 'fs';

import { DateTime, Duration, Settings } from 'luxon';
Settings.defaultZone = 'utc';

import { RateLimiter } from 'limiter';
const limiter = new RateLimiter({ tokensPerInterval: 2, interval: 'second' });
export const getPlayerDataThrottled = async (connectCode: string) => {
  const _ = await limiter.removeTokens(1); // don't remove this limiter
  const query = `
    fragment userProfilePage on User {
        displayName
        connectCode {
            code
        }
        rankedNetplayProfile {
            ratingOrdinal
            ratingUpdateCount
            wins
            losses
            dailyGlobalPlacement
            dailyRegionalPlacement
            continent
            characters {
                character
                gameCount
            }
        }
    }

    query AccountManagementPageQuery($cc: String!) {
        getConnectCode(code: $cc) {
            user {
                ...userProfilePage
            }
        }
    }
  `;

  const req = await fetch('https://gql-gateway-dot-slippi.uc.r.appspot.com/graphql', {
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      operationName: 'AccountManagementPageQuery',
      query,
      variables: { cc: connectCode }
    }),
    method: 'POST'
  });
  return req.json();
};

import codesJSON from '../data/codes.json' with { type: 'json' };
const getPlayerCodes = (): string[] => {
  return codesJSON["all"];
};

const getSlippiPlayers = async (codes) => {
  console.log(`Fetching ${codes.length} players from slippi.gg...`);

  if (false) {
    console.log('getSlippiPlayers: returning dummy data');
    return JSON.parse(
      '[{"displayName":"dummy", "connectCode":{"code":"FOO#420"},"rankedNetplayProfile":{"id":"0x894425", "ratingOrdinal":2195.378109,"ratingUpdateCount":150,"wins":126,"losses":24,"dailyGlobalPlacement":null,"dailyRegionalPlacement":25,"continent":"SOUTH_AMERICA", "characters":[{"id":"0x894d55", "character":"YOSHI", "gameCount":10}]}}]'
    );
  }

  const allData = codes.map((code) => getPlayerDataThrottled(code));
  const results = await Promise.all(allData.map((p) => p.catch((e) => e)));
  const validResults = results.filter((result) => !(result instanceof Error));
  const invalidResults = results.filter((result) => result instanceof Error);
  if (invalidResults.length) {
    console.log(`Invalid results (${invalidResults.length}):`);
    console.log(invalidResults);
  }

  const unsortedPlayers = validResults
    .filter((data: any) => data?.data?.getConnectCode?.user)
    .map((data: any) => data.data.getConnectCode.user);
  return unsortedPlayers.sort(
    (p1, p2) =>
      (p2.rankedNetplayProfile?.ratingOrdinal || 0) - (p1.rankedNetplayProfile?.ratingOrdinal || 0)
  );
};

async function main() {
  if (process.version !== 'v20.12.2') {
    console.error('Wrong node version');
    return;
  }

  const now = DateTime.now().toUTC();
  console.log(`Running fetchPlayers (${true ? 'ranked' : 'unranked'}): ${now.ts}`);

  const codes = getPlayerCodes();
  const rc = await getSlippiPlayers(codes);

  const newPlayersJSON = JSON.stringify(rc);

  const dir = true ? 'ranked' : 'unranked';
  const filename = path.join('.', 'local', dir, `.${dir}-slippi.json`);
  fs.writeFileSync(filename, newPlayersJSON);
  console.log(`Saved as [${filename}]`);

  if (true) {
    fs.writeFileSync(
      path.join(__dirname, '..', 'data', 'timestamp.json'),
      JSON.stringify({ timestamp: now.ts })
    );
  }
}

main();
