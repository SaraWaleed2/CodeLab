import { shuffledOrder } from './shuffle';

describe('shuffledOrder', () => {
  it('is a permutation of 0..n-1', () => {
    for (const n of [2, 3, 4, 5, 8]) {
      expect([...shuffledOrder(n, 1)].sort((a, b) => a - b)).toEqual(Array.from({ length: n }, (_, i) => i));
    }
  });

  it('gives the same order for the same seed', () => {
    expect(shuffledOrder(4, 3)).toEqual(shuffledOrder(4, 3));
  });

  it('does not leave a card across from its own partner in small rounds', () => {
    for (const n of [4]) {
      for (let seed = 1; seed <= 3; seed++) {
        shuffledOrder(n, seed).forEach((card, row) => expect(card, `seed ${seed}, row ${row}`).not.toBe(row));
      }
    }
  });
});
