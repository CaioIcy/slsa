#!/usr/bin/env -S npx vite-node --script

import * as path from 'path';
import * as fs from 'fs';
import { DateTime, Duration, Settings } from 'luxon';
Settings.defaultZone = 'utc';

import { SlippiAccount } from '$lib/types.ts';
import { players, findPlayerByCode, findPlayerBySlug } from '$lib/data/players.ts';
import dataOldAccounts from '../data/slippi-old.json' with { type: 'json' };
import dataNewAccounts from '../data/slippi-new.json' with { type: 'json' };
dataOldAccounts.sort(
  (a, b) =>
    (b?.rankedNetplayProfile?.ratingOrdinal ?? 0) - (a?.rankedNetplayProfile?.ratingOrdinal ?? 0)
);
dataNewAccounts.sort(
  (a, b) =>
    (b?.rankedNetplayProfile?.ratingOrdinal ?? 0) - (a?.rankedNetplayProfile?.ratingOrdinal ?? 0)
);

function buildCodeMapEntry(slippiAccount, slug) {
  const oldSlippiAccount = dataOldAccounts.find(
    (o) => slippiAccount.connectCode.code === o.connectCode.code
  );

  const oldRankIndex = dataOldAccounts.filter(oldSlippiAccount => (oldSlippiAccount?.rankedNetplayProfile?.ratingUpdateCount ?? 0) > 0).findIndex(
    (oldSlippiAccount) => slippiAccount.connectCode.code === oldSlippiAccount.connectCode.code
  );
  const newRankIndex = dataNewAccounts.filter(newSlippiAccount => (newSlippiAccount?.rankedNetplayProfile?.ratingUpdateCount ?? 0) > 0).findIndex(
    (newSlippiAccount) => slippiAccount.connectCode.code === newSlippiAccount.connectCode.code
  );

  const isNew = !oldSlippiAccount || !oldSlippiAccount?.rankedNetplayProfile?.continent;
  return {
    slug: slug,
    rank: newRankIndex + 1,
    diff: {
      isNew: isNew,
      rank: oldRankIndex + 1 - (newRankIndex + 1),
      elo: oldSlippiAccount
        ? Math.floor(
            (slippiAccount?.rankedNetplayProfile?.ratingOrdinal ?? 0) -
              (oldSlippiAccount?.rankedNetplayProfile?.ratingOrdinal ?? 0)
          )
        : 0
    },
    account: slippiAccount
  };
}

function validate() {
  const codes = new Set();
  for (const player of players) {
    // ERR_DUP_CODE
    if (player.slippiConnectCodes) {
      for (const code of player.slippiConnectCodes) {
        if (codes.has(code)) {
          console.error('ERR_DUP_CODE', player);
          continue;
        }
        codes.add(code);
      }
    }
  }
}

async function main() {
  if (process.version !== 'v22.12.0') {
    console.error('Wrong node version');
    return;
  }

  const now = DateTime.now().toUTC();
  console.log(`Running ${now} (${now.ts})...`);
  validate();

  const codeMap = {};
  const slugMap = {};

  const allCodes = dataOldAccounts
    .map((p) => p.connectCode.code)
    .concat(dataNewAccounts.map((p) => p.connectCode.code))
    .concat(players.map((p) => p.slippiConnectCodes))
    .flat(Infinity)
    .filter((c) => c)
    .filter((c) => c.length >= 3 && c.includes('#'))
    .filter((value, index, array) => array.indexOf(value) === index)
    .sort();

  let i = 0;
  for (const realPlayer of players) {
    const slug =
      realPlayer.slug || `__unknown-slug-${i}-${realPlayer.slippiConnectCodes.toString()}`;

    const slippiAccounts = dataNewAccounts.filter((slippiAccount) =>
      realPlayer.slippiConnectCodes?.includes(slippiAccount.connectCode.code)
      && slippiAccount.rankedNetplayProfile?.continent === 'SOUTH_AMERICA'
    );
    for (const slippiAccount of slippiAccounts) {
      codeMap[slippiAccount.connectCode.code] = buildCodeMapEntry(slippiAccount, slug);
    }

    delete realPlayer.sgg; // unused
    slugMap[slug] = realPlayer;
    i++;
  }

  for (const code of allCodes) {
    if (code in codeMap) {
      continue;
    }

    const slippiAccount = dataNewAccounts.find(
      (slippiAccount) => code === slippiAccount.connectCode.code
    );
    if (!slippiAccount) {
      continue;
    }

    if(slippiAccount.rankedNetplayProfile?.continent !== 'SOUTH_AMERICA') {
      continue;
    }

    codeMap[code] = buildCodeMapEntry(slippiAccount, null);
  }

  const leaderboard = Object.keys(codeMap).filter((code) => {
    const player = codeMap[code].account;
    const setCount =
      (player.rankedNetplayProfile?.wins ?? 0) + (player.rankedNetplayProfile?.losses ?? 0);
    return setCount > 0;
  });
  leaderboard.sort(
    (a, b) =>
      (codeMap[b].account.rankedNetplayProfile?.ratingOrdinal ?? 0) -
      (codeMap[a].account.rankedNetplayProfile?.ratingOrdinal ?? 0)
  );
  for (const code of leaderboard) {
    if (codeMap[code].account.rankedNetplayProfile?.continent !== 'SOUTH_AMERICA') {
      console.error('ERR_NOT_SA', codeMap[code].account);
      continue;
    }
  }

  fs.writeFileSync(
    path.join('./static/data.json'),
    JSON.stringify({
      timestamp: now.ts,
      codeMap,
      slugMap,
      leaderboard
    })
  );
}

main();
