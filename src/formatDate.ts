type Format = 'YYYY-MM-DD' | 'DD/MM/YYYY' | 'MM-DD-YYYY';
type FormatDate = (date: string | Date, format: Format) => string;

export const formatDate: FormatDate = (date, format) => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = (d.getMonth() + 1).toString().padStart(2, '0');
  const day = d.getDate().toString().padStart(2, '0');

  switch (format) {
    case 'YYYY-MM-DD':
      return `${year}-${month}-${day}`;
    case 'DD/MM/YYYY':
      return `${day}/${month}/${year}`;
    case 'MM-DD-YYYY':
      return `${month}-${day}-${year}`;
    default:
      throw new Error(`Unknown format: ${format}`);
  }
};
