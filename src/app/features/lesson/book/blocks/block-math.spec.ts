import {
  binaryToDecimal,
  binaryAdd,
  bitCombos,
  charCodes,
  complements,
  correlation,
  estimatePi,
  fillLines,
  formatBytes,
  sameCode,
  insideQuarterCircle,
  queueTimes,
  linearFit,
  stdDev,
  variance,
  frequencyBins,
  mean,
  median,
  modes,
  parseNumbers,
  quartiles,
  ipOctets,
  halfAdder,
  imageBytes,
  decimalToBinary,
  divisionSteps,
  hexGroups,
  andGate,
  orGate,
  notGate,
  placeValues,
  transferSeconds,
  rleText,
  soundBytes,
  superscript,
} from './block-math';

describe('block-math', () => {
  it('lists every n-bit pattern (book p.64: 1, 2 and 3 bit)', () => {
    expect(bitCombos(1)).toEqual(['0', '1']);
    expect(bitCombos(2)).toEqual(['00', '01', '10', '11']);
    expect(bitCombos(3)).toHaveLength(8);
  });

  it('converts the book example (10111)₂ = 23 (p.64)', () => {
    expect(placeValues('10111').map((p) => p.weight)).toEqual([16, 8, 4, 2, 1]);
    expect(binaryToDecimal('10111')).toBe(23);
  });

  it('converts the book example 6 = (110)₂ (p.65)', () => {
    expect(divisionSteps(6)).toEqual([
      { dividend: 6, quotient: 3, remainder: 0 },
      { dividend: 3, quotient: 1, remainder: 1 },
      { dividend: 1, quotient: 0, remainder: 1 },
    ]);
    expect(decimalToBinary(6)).toBe('110');
  });

  it('gets the corrected p.66 value right: (11010)₂ = 26, not 50', () => {
    expect(binaryToDecimal('11010')).toBe(26);
  });

  it('writes superscripts', () => {
    expect(superscript(20)).toBe('²⁰');
  });

  it('splits the book example 10011010 into 9 and A', () => {
    expect(hexGroups('10011010').map((g) => g.hex).join('')).toBe('9A');
    expect(hexGroups('110').map((g) => g.bits)).toEqual(['0110']);
    expect(hexGroups('')).toEqual([]);
  });

  it('gives the book codes for Hello (48 65 6C 6C 6F)', () => {
    expect(charCodes('Hello').map((c) => c.hex).join(' ')).toBe('48 65 6C 6C 6F');
    expect(charCodes('H')[0].bits).toBe('01001000');
  });

  it('adds the book examples: 0101 + 1001 = 1110 and 1010 + 0101 = 1111', () => {
    expect(binaryAdd('0101', '1001').result).toBe('1110');
    expect(binaryAdd('1010', '0101').result).toBe('1111');
    expect(binaryAdd('0011', '1011').result).toBe('1110');
  });

  it('keeps the carry out of the top column', () => {
    expect(binaryAdd('1000', '1001')).toMatchObject({ result: '10001', overflow: true });
    expect(binaryAdd('1', '').result).toBe('1');
  });

  it('gives the book complements: 0101 → 1010 → 1011', () => {
    expect(complements('0101')).toEqual({ ones: '1010', twos: '1011' });
    expect(complements('0111').twos).toBe('1001');
  });

  it('computes sound size as in the book: 44,100 Hz, 16 bit, stereo = 176,400 B', () => {
    expect(soundBytes(44100, 16, 2, 1)).toBe(176400);
    expect(formatBytes(176400)).toBe('176.4 KB');
    expect(formatBytes(500)).toBe('500 B');
  });

  it('compresses the book run-length example: 25 letters become A5B2A4B8A6 (10 letters, 40%)', () => {
    const text = 'AAAAABBAAAABBBBBBBBAAAAAA';
    expect(text.length).toBe(25);
    expect(rleText(text)).toBe('A5B2A4B8A6');
    expect(rleText('')).toBe('');
  });

  it('sizes the book picture: 1,280 x 720 x 24 bit = 2,764,800 B', () => {
    expect(imageBytes(1280, 720, 24)).toBe(2764800);
    expect(formatBytes(2764800)).toBe('2.76 MB');
  });

  it('follows the book gate tables (AND, OR, NOT)', () => {
    expect([andGate(0, 0), andGate(0, 1), andGate(1, 0), andGate(1, 1)]).toEqual([0, 0, 0, 1]);
    expect([orGate(0, 0), orGate(0, 1), orGate(1, 0), orGate(1, 1)]).toEqual([0, 1, 1, 1]);
    expect([notGate(0), notGate(1)]).toEqual([1, 0]);
  });

  it('follows the book half-adder table (p.104)', () => {
    expect(halfAdder(0, 0)).toEqual({ s: 0, c: 0 });
    expect(halfAdder(0, 1)).toEqual({ s: 1, c: 0 });
    expect(halfAdder(1, 0)).toEqual({ s: 1, c: 0 });
    expect(halfAdder(1, 1)).toEqual({ s: 0, c: 1 });
  });

  it('shows 192.168.3.1 as the book 11000000.10101000.00000011.00000001', () => {
    expect(ipOctets('192.168.3.1').map((o) => o.bits).join('.')).toBe('11000000.10101000.00000011.00000001');
    expect(ipOctets('300.1').map((o) => o.n)).toEqual([255, 1, 0, 0]);
  });

  it('works out the book transfer times: 20 MB at 40 Mbps = 4 s, and 1 GB at 100 Mbps with 80% efficiency = 100 s', () => {
    expect(transferSeconds(20, 40, 1)).toBe(4);
    expect(transferSeconds(1000, 100, 0.8)).toBe(100);
  });

  it('gets the book 12-student example: mean 7, median 6.5, mode 6 (p.140)', () => {
    const xs = parseNumbers('6 9 3 6 10 12 4 3 8 10 7 6');
    expect(xs.length).toBe(12);
    expect(mean(xs)).toBe(7);
    expect(median(xs)).toBe(6.5);
    expect(modes(xs)).toEqual([6]);
  });

  it('builds the book frequency table: 32 distances in classes of 3 m from 12 (p.139)', () => {
    const xs = parseNumbers('15 20 21 23 30 27 27 16 20 18 22 19 20 21 12 21 24 27 22 26 25 32 24 21 21 23 20 16 23 21 21 24');
    expect(xs.length).toBe(32);
    expect(frequencyBins(xs, 12, 3).map((b) => b.count)).toEqual([1, 3, 6, 12, 5, 3, 2]);
  });

  it('gets the book quartiles (p.143): min 20, Q1 36, median 45, Q3 58, max 72', () => {
    const q = quartiles(parseNumbers('58 72 52 61 36 43 20 32 38 47'));
    expect(q).toEqual({ min: 20, q1: 36, median: 45, q3: 58, max: 72 });
  });

  it('gets the book spread example: 26 25 32 28 32 25 → mean 28, variance 9, sd 3 (p.145)', () => {
    const xs = parseNumbers('26 25 32 28 32 25');
    expect(mean(xs)).toBe(28);
    expect(variance(xs)).toBe(9);
    expect(stdDev(xs)).toBe(3);
  });

  it('finds a perfect correlation of 1 and −1', () => {
    expect(correlation([1, 2, 3, 4], [2, 4, 6, 8])).toBeCloseTo(1);
    expect(correlation([1, 2, 3, 4], [8, 6, 4, 2])).toBeCloseTo(-1);
  });

  it('finds the least-squares line through exact points: y = 2x + 1', () => {
    const fit = linearFit([0, 1, 2, 3], [1, 3, 5, 7]);
    expect(fit.a).toBeCloseTo(2);
    expect(fit.b).toBeCloseTo(1);
  });

  it('shows a clear negative correlation for the book x/y table (p.148)', () => {
    const r = correlation(parseNumbers('7 4 6 2 9 3 8 1 6 3'), parseNumbers('3 6 5 8 3 4 2 9 2 5'));
    expect(r).toBeLessThan(-0.7);
  });

  it('estimates pi like the book: 750 of 1,000 dots inside gives 3', () => {
    expect(estimatePi(750, 1000)).toBe(3);
    expect(estimatePi(785, 1000)).toBeCloseTo(3.14);
    expect(estimatePi(0, 0)).toBe(0);
  });

  it('tells inside from outside the quarter circle', () => {
    expect(insideQuarterCircle(0.5, 0.5)).toBe(true);
    expect(insideQuarterCircle(0.9, 0.9)).toBe(false);
  });

  it('reproduces the book queue (p.165): arrivals every 20, service 40 → waits 0, 20, 40, 60 and ends at 160', () => {
    const rows = queueTimes(20, 40, 4);
    expect(rows.map((r) => r.wait)).toEqual([0, 20, 40, 60]);
    expect(rows[3].end).toBe(160);
    expect(queueTimes(60, 40, 4).every((r) => r.wait === 0)).toBe(true);
  });

  it('compares typed code ignoring spaces and quote style, but not letters', () => {
    expect(sameCode('total + i', 'total+i')).toBe(true);
    expect(sameCode('a[ i ]', 'a[i]')).toBe(true);
    expect(sameCode('"Cairo"', "'Cairo'")).toBe(true);
    expect(sameCode('Total + i', 'total + i')).toBe(false);
  });

  it('splits program text into text and numbered blanks', () => {
    const lines = fillLines('total = 0\nfor i in range(1, {{0}}):\n    total = {{1}}');
    expect(lines.length).toBe(3);
    expect(lines[1].map((p) => p.blank)).toEqual([null, 0, null]);
    expect(lines[2].some((p) => p.blank === 1)).toBe(true);
  });
});
