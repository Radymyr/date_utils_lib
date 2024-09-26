type AddDays = (date: string | Date, days: number) => Date;

export const addDays: AddDays = (date, days) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);

  return result;
};
