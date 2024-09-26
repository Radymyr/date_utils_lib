# date_utils_lib

**date_utils_lib** — библиотека для работы с датами. Она позволяет легко рассчитывать разницу между датами, добавлять дни, а также форматировать даты в различные форматы.

## Установка

Вы можете установить библиотеку через npm:

```bash
npm install date_utils_lib
```

## Как использовать

### Пример использования функции `dateDiff`:

```typescript
import { dateDiff } from 'date_utils_lib';

const daysDifference = dateDiff('2023-09-25', '2023-09-30', 'days');
console.log(daysDifference); // Выведет 5

const hoursDifference = dateDiff(
  '2023-09-25T00:00:00',
  '2023-09-26T12:00:00',
  'hours'
);
console.log(hoursDifference); // Выведет 36

const minutesDifference = dateDiff(
  '2023-09-25T00:00:00',
  '2023-09-25T01:30:00',
  'minutes'
);
console.log(minutesDifference); // Выведет 90
```

### Пример использования с тестами:

Для тестирования с помощью Vitest можно использовать следующий пример:

```typescript
import { describe, it, expect } from 'vitest';
import { dateDiff } from 'date_utils_lib';

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
    }).toThrowError('Unknown unit: weeks');
  });
});
```

## Скрипты

- `npm run build`: Компилирует код в формате ESM и CommonJS.
- `npm run watch`: Запускает режим наблюдения для автоматической компиляции при изменениях.
- `npm run test`: Запускает тесты с использованием Vitest.

## Структура проекта

- **src**: Исходный код библиотеки.
  - `addDays.ts`: Функция для добавления дней к дате.
  - `dateDiff.ts`: Функция для расчета разницы между датами.
  - `formatDate.ts`: Функция для форматирования даты.
  - `index.ts`: Главный файл для экспорта функций.
- **tests**: Тесты для функций библиотеки.
  - `dateDiff.test.js`: Тесты для `dateDiff`.
  - `formatDate.test.js`: Тесты для `formatDate`.

## Лицензия

Лицензия ISC.

## Автор

**radymyr**
