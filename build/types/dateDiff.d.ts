type Unit = 'days' | 'hours' | 'minutes' | 'days';
type DateDiff = (date1: string | Date, date2: string | Date, unit: Unit) => number;
export declare const dateDiff: DateDiff;
export {};
