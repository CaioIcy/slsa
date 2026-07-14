#!/usr/bin/env npx vite-node --script

// Prints when the current ranked day opened (the most recent one, if we're off
// cycle via workflow_dispatch). bin/ci.sh anchors data/slippi-old.json to it.
import { getRankedWindow } from './ranked-day.ts';

console.log(getRankedWindow(new Date()).start.toISOString());
