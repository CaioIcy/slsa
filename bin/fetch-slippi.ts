#!/usr/bin/env npx vite-node --script

import * as path from 'path';
import * as fs from 'fs';

import { DateTime, Duration, Settings } from 'luxon';
Settings.defaultZone = 'utc';

import { RateLimiter } from 'limiter';
const limiter = new RateLimiter({ tokensPerInterval: 1, interval: 'second' });
export const getPlayerDataThrottled = async (connectCode: string) => {
  const _ = await limiter.removeTokens(1); // don't remove this limiter
  const query = `
    fragment profileFields on NetplayProfile {
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

    fragment userProfilePage on User {
      displayName
      connectCode {
        code
      }
      rankedNetplayProfile {
        ...profileFields
      }
    }

    query UserProfilePageQuery($cc: String) {
      getUser(connectCode: $cc) {
        ...userProfilePage
      }
    }
  `;

  try {
    const req = await fetch('https://internal.slippi.gg/graphql', {
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        operationName: 'UserProfilePageQuery',
        query,
        variables: { cc: connectCode }
      }),
      method: 'POST'
    });

    if (!req.ok) {
      console.error(`Failed to fetch ${connectCode}: HTTP ${req.status} ${req.statusText}`);
      throw new Error(`HTTP ${req.status} for ${connectCode}`);
    }

    const data = await req.json();
    if (data.errors) {
      console.error(`GraphQL errors for ${connectCode}:`, data.errors);
    }
    return data;
  } catch (error) {
    console.error(`Error fetching ${connectCode}:`, error.message);
    throw error;
  }
};

import codesJSON from '../data/codes.json' with { type: 'json' };
// import codesJSON from '../data/dev-codes.json' with { type: 'json' };
const getPlayerCodes = (): string[] => {
  return codesJSON["all"].filter(c => !(codesJSON["removed"] ?? []).includes(c));
};

const getSlippiPlayers = async (codes) => {
  console.log(`Fetching ${codes.length} players from slippi.gg...`);

  if (false) {
    console.log('getSlippiPlayers: returning dummy data');
    return JSON.parse(
      '[{"displayName":"dummy", "connectCode":{"code":"FOO#420"},"rankedNetplayProfile":{"id":"0x894425", "ratingOrdinal":2195.378109,"ratingUpdateCount":150,"wins":126,"losses":24,"dailyGlobalPlacement":null,"dailyRegionalPlacement":25,"continent":"SOUTH_AMERICA", "characters":[{"id":"0x894d55", "character":"YOSHI", "gameCount":10}]}}]'
    );
  }

  const allData = codes.map((code) => getPlayerDataThrottled(code).then(
    data => ({ code, data, error: null }),
    error => ({ code, data: null, error })
  ));
  const results = await Promise.all(allData);
  const validResults = results.filter(r => !r.error).map(r => r.data);
  const failedResults = results.filter(r => r.error);

  if (failedResults.length) {
    console.log(`\nFailed to fetch ${failedResults.length} codes:`);
    failedResults.forEach(({ code, error }) => {
      console.log(`  - ${code}: ${error.message}`);
    });
  }

  const unsortedPlayers = validResults
    .filter((data: any) => data?.data?.getUser)
    .map((data: any) => data.data.getUser);
  return unsortedPlayers.sort(
    (p1, p2) =>
      (p2.rankedNetplayProfile?.ratingOrdinal || 0) - (p1.rankedNetplayProfile?.ratingOrdinal || 0)
  );
};

async function main() {
  if (process.version !== 'v22.12.0') {
    console.error('Wrong node version');
    return;
  }

  const now = DateTime.now().toUTC();
  console.log(`Running fetchPlayers (${true ? 'ranked' : 'unranked'}): ${now.ts}`);

  const codes = getPlayerCodes();
  const rc = await getSlippiPlayers(codes);

  const newPlayersJSON = JSON.stringify(rc);

  console.log("Invalid codes:", JSON.stringify(codes.filter(c => !rc.map(p => p.connectCode?.code).includes(c))));
  console.log("Non-SA codes:", JSON.stringify(rc.filter(p => !['SOUTH_AMERICA', null].includes(p.rankedNetplayProfile?.continent)).map(p => p.connectCode?.code)));

  const filename = path.join('.', 'local', 'ranked', `.ranked-slippi.json`);
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
