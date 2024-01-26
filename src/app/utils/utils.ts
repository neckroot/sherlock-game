export function shuffle<T>(array: Array<T>): Array<T> {
  const shuffled = array.slice();

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = randomN(i + 1);
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

/**
 * Создает массив чисел в заданном диапазоне.
 * Работает как с целыми положительными, так и с отрицательными значениями.
 * Можно передавать параметры в любой последовательности.
 *
 * @param {number} end - Конечное значение диапазона (не включительно).
 * @param {number} [start=0] - Начальное значение диапазона.
 * @returns {number[]} - Массив чисел в указанном диапазоне.
 */
export function range(end: number, start: number = 0): number[] {
  if (end < start) [end, start] = [start, end];

  return Array.from({ length: end - start }, (_, i) => start + i);
}

export function getMapValues<T, K>(map: Map<T, Array<K>>): Array<K> {
  return [...map.values()].flat();
}

/**
 * Генерирует случайное целое число из заданного диапазона.
 * @param {number} to - Конечное значение диапазона (не включительно).
 * @param {number} [from=0] - Начальное значение диапазона.
 * @returns {number} - Случайное целое число из заданного диапазона.
 */
export function randomN(to: number, from: number = 0): number {
  if (to < from) [to, from] = [from, to];

  return from + Math.floor(Math.random() * (to - from));
}
