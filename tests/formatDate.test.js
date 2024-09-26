import { describe, expect, test } from 'vitest';
import { formatDate } from '../src/formatDate';

describe('should format date', () => {
  test('to YYYY-MM-DD', () => {
    const result = formatDate('2023-09-25', 'YYYY-MM-DD');
    expect(result).toBe('2023-09-25');
  });

  test('to YYYY-MM-DD', () => {
    const result = formatDate('2023-05-25', 'DD/MM/YYYY');
    expect(result).toBe('25/05/2023');
  });

  test('to YYYY-MM-DD', () => {
    const result = formatDate('2021-10-25', 'MM-DD-YYYY');
    expect(result).toBe('10-25-2021');
  });
});
