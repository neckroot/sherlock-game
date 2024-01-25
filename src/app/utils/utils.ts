export function shuffle<T>(array: Array<T>): Array<T> {
  const shuffled = array.slice();

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
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
