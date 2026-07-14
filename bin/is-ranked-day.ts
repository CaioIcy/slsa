#!/usr/bin/env npx vite-node --script

import { getRankedWindow } from './ranked-day.ts';

process.exit(getRankedWindow(new Date()).isActive ? 0 : 42);
