type Unit = 'days' | 'hours' | 'minutes' | 'days';
type DateDiff = (
  date1: string | Date,
  date2: string | Date,
  unit: Unit
) => number;

export const dateDiff: DateDiff = (date1, date2, unit) => {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  const diffTime = Math.abs(d2.getTime() - d1.getTime());

  switch (unit) {
    case 'days':
      return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    case 'hours':
      return Math.ceil(diffTime / (1000 * 60 * 60));
    case 'minutes':
      return Math.ceil(diffTime / (1000 * 60));
    default:
      throw new Error(`Unknown unit: ${unit}`);
  }
};
