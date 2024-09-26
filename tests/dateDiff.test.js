import { describe, it, expect } from 'vitest';
import { dateDiff } from '../src/dateDiff';

describe('dateDiff', () => {
  it('should calculate difference in days correctly', () => {
    const result = dateDiff('2023-09-25', '2023-09-30', 'days');
    expect(result).toBe(5);
  });

  it('should calculate difference in hours correctly', () => {
    const result = dateDiff(
      '2023-09-25T00:00:00',
      '2023-09-26T12:00:00',
      'hours'
    );
    expect(result).toBe(36);
  });

  it('should calculate difference in minutes correctly', () => {
    const result = dateDiff(
      '2023-09-25T00:00:00',
      '2023-09-25T01:30:00',
      'minutes'
    );
    expect(result).toBe(90);
  });

  it('should throw an error for an unknown unit', () => {
    expect(() => {
      dateDiff('2023-09-25', '2023-09-30', 'weeks');
    }).toThrowError('Unknown unit');
  });
});
