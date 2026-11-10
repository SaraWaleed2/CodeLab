/**
 * A fixed "shuffle": the same seed always gives the same order, so a round looks the same every time
 * (and can be tested), but a card is never left across from its own partner when avoidable.
 */
export function shuffledOrder(length: number, seed: number): number[] {
  let state = seed * 2654435761;
  const next = () => {
    state = (state ^ (state << 13)) >>> 0;
    state = (state ^ (state >>> 17)) >>> 0;
    state = (state ^ (state << 5)) >>> 0;
    return state / 0x100000000;
  };
  const order = Array.from({ length }, (_, i) => i);
  for (let i = length - 1; i > 0; i--) {
    const j = Math.floor(next() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  // Move any card that landed across from its own partner by swapping it with its neighbour.
  for (let i = 0; i < length; i++) {
    if (order[i] === i) {
      const k = (i + 1) % length;
      [order[i], order[k]] = [order[k], order[i]];
    }
  }
  return order;
}
