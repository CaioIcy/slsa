import { format, intervalToDuration } from 'date-fns';

const formatDistanceLocale: Record<string, string> = {
  xYears: '{{count}} yrs',
  xMonths: '{{count}} months',
  xWeeks: '{{count}} weeks',
  xDays: '{{count}} days',
  xHours: '{{count}} hrs',
  xMinutes: '{{count}} mins',
  xSeconds: '{{count}} secs'
};

export const shortEnLocale = {
  formatDistance: (token: string, count: number) => {
    const replacement = formatDistanceLocale[token];
    if (replacement) {
      return replacement.replace('{{count}}', count.toString());
    }
    return '';
  }
};
