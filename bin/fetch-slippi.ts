#!/usr/bin/env npx vite-node --script

import * as path from 'path';
import * as fs from 'fs';

import { DateTime, Duration, Settings } from 'luxon';
Settings.defaultZone = 'utc';

import { RateLimiter } from 'limiter';
// One request per batch, spaced 2s apart. Slippi's getUser supports field aliasing,
// so BATCH_SIZE codes are fetched in a single request; don't remove this limiter.
const BATCH_SIZE = 200;
const limiter = new RateLimiter({ tokensPerInterval: 1, interval: 2000 });

const FRAGMENTS = `
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
`;

// Fetch a batch of codes in one aliased GraphQL request. Codes are passed as query
// variables (not interpolated) so values containing '#' can't break the query. An
// invalid/removed code resolves to null for its alias with no top-level error, so it
// is simply dropped. Returns the non-null User objects for the batch.
const getPlayerBatch = async (codes: string[]) => {
  await limiter.removeTokens(1);

  const varDefs = codes.map((_, i) => `$cc${i}: String`).join(', ');
  const selections = codes
    .map((_, i) => `a${i}: getUser(connectCode: $cc${i}) { ...userProfilePage }`)
    .join('\n');
  const query = `${FRAGMENTS}\n query BatchUserProfileQuery(${varDefs}) {\n${selections}\n }`;
  const variables = Object.fromEntries(codes.map((code, i) => [`cc${i}`, code]));

  const fetchOnce = async () => {
    const req = await fetch('https://internal.slippi.gg/graphql', {
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ operationName: 'BatchUserProfileQuery', query, variables }),
      method: 'POST'
    });
    if (!req.ok) {
      throw new Error(`HTTP ${req.status} ${req.statusText}`);
    }
    const data = await req.json();
    if (data.errors) {
      console.error('GraphQL errors:', data.errors);
    }
    return codes.map((_, i) => data?.data?.[`a${i}`]).filter(Boolean);
  };

  try {
    return await fetchOnce();
  } catch (error) {
    console.error(`Batch failed (${codes.length} codes), retrying once: ${error.message}`);
    try {
      await limiter.removeTokens(1);
      return await fetchOnce();
    } catch (retryError) {
      console.error(`Batch failed again, skipping ${codes.length} codes: ${retryError.message}`);
      return [];
    }
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

  const batches: string[][] = [];
  for (let i = 0; i < codes.length; i += BATCH_SIZE) {
    batches.push(codes.slice(i, i + BATCH_SIZE));
  }
  console.log(`Fetching in ${batches.length} batch(es) of up to ${BATCH_SIZE}...`);

  const unsortedPlayers = [];
  for (let i = 0; i < batches.length; i++) {
    const players = await getPlayerBatch(batches[i]);
    console.log(`  batch ${i + 1}/${batches.length}: ${players.length}/${batches[i].length}`);
    unsortedPlayers.push(...players);
  }

  return unsortedPlayers.sort(
    (p1, p2) =>
      (p2.rankedNetplayProfile?.ratingOrdinal || 0) - (p1.rankedNetplayProfile?.ratingOrdinal || 0)
  );
};

async function main() {
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
