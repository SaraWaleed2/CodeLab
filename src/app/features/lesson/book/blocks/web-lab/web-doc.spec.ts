import { buildWebDoc } from './web-doc';

describe('buildWebDoc', () => {
  const html = '<html><head><link rel="stylesheet" href="style.css"></head><body><h1>Hi</h1></body></html>';

  it('replaces the stylesheet link with the css', () => {
    const doc = buildWebDoc(html, 'h1 { color: red; }', '');
    expect(doc).toContain('<style>');
    expect(doc).toContain('h1 { color: red; }');
    expect(doc).not.toContain('style.css');
  });

  it('adds the css to the head when there is no link', () => {
    const doc = buildWebDoc('<html><head></head><body></body></html>', 'p{}', '');
    expect(doc.indexOf('<style>')).toBeLessThan(doc.indexOf('</head>'));
  });

  it('puts the script at the end of the body', () => {
    const doc = buildWebDoc(html, '', 'alert(1)');
    expect(doc.indexOf('<script>')).toBeGreaterThan(doc.indexOf('<h1>'));
    expect(doc.indexOf('<script>')).toBeLessThan(doc.indexOf('</body>'));
  });

  it('leaves the page alone when css and script are empty', () => {
    expect(buildWebDoc(html, '  ', '')).toBe(html);
  });
});
