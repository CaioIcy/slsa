#!/usr/bin/env npx vite-node --script

// SLP launcher
const MS_PER_DAY = 24 * 60 * 60 * 1000;
const FREE_ACCESS_START_AT = new Date(Date.UTC(2024, 3, 15, 14, 0, 0));
const FREE_ACCESS_OFFSET_FROM = new Date(Date.UTC(2024, 3, 15, 8, 0, 0));

const getFullAccessTimes = (
  now: Date
): { isActive: boolean; nextStartTime: Date; nextEndTime: Date } => {
  const startTime = FREE_ACCESS_START_AT;
  const offsetTime = FREE_ACCESS_OFFSET_FROM;
  if (now < startTime) {
    return {
      isActive: false,
      nextStartTime: startTime,
      nextEndTime: new Date(offsetTime.getTime() + MS_PER_DAY)
    };
  }

  const daysSinceStart = Math.floor((now.getTime() - offsetTime.getTime()) / MS_PER_DAY);
  let daysUntilNextRankedDay = 4 - (daysSinceStart % 4);
  if (daysUntilNextRankedDay === 4) {
    daysUntilNextRankedDay = 0;
  }
  const nextRankedDayTime = new Date(
    offsetTime.getTime() + (daysSinceStart + daysUntilNextRankedDay) * MS_PER_DAY
  );

  return {
    isActive: daysUntilNextRankedDay === 0,
    nextStartTime: nextRankedDayTime,
    nextEndTime: new Date(nextRankedDayTime.getTime() + MS_PER_DAY)
  };
};

const now = new Date();
const fullAccess = getFullAccessTimes(now);
if(fullAccess.isActive) {
  process.exit(0)
}

process.exit(42);