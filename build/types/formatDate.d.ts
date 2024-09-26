type Format = 'YYYY-MM-DD' | 'DD/MM/YYYY' | 'MM-DD-YYYY';
type FormatDate = (date: string | Date, format: Format) => string;
export declare const formatDate: FormatDate;
export {};
