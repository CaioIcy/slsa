// SLP launcher: ranked is open for a 24h window once every 4 days.
// Windows start at 08:00 UTC; the epoch below is a known ranked day.
const MS_PER_DAY = 24 * 60 * 60 * 1000;
const PERIOD_DAYS = 4;
const EPOCH = new Date(Date.UTC(2024, 3, 15, 8, 0, 0));

export type RankedWindow = {
  isActive: boolean;
  /** Start of the current window, or of the most recent one when not active. */
  start: Date;
  end: Date;
};

export const getRankedWindow = (now: Date): RankedWindow => {
  const daysSinceEpoch = Math.floor((now.getTime() - EPOCH.getTime()) / MS_PER_DAY);
  const daysIntoPeriod = ((daysSinceEpoch % PERIOD_DAYS) + PERIOD_DAYS) % PERIOD_DAYS;

  const start = new Date(EPOCH.getTime() + (daysSinceEpoch - daysIntoPeriod) * MS_PER_DAY);
  return {
    isActive: daysIntoPeriod === 0,
    start,
    end: new Date(start.getTime() + MS_PER_DAY)
  };
};
