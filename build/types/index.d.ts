declare const _default: {
    formatDate: (date: string | Date, format: "YYYY-MM-DD" | "DD/MM/YYYY" | "MM-DD-YYYY") => string;
    addDays: (date: string | Date, days: number) => Date;
    dateDiff: (date1: string | Date, date2: string | Date, unit: "days" | "hours" | "minutes") => number;
};
export default _default;
