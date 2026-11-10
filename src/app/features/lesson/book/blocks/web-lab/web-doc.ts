/**
 * Joins the three "files" of the book's web examples (index.html, style.css, script.js) into one page, the way
 * WebDen does: the stylesheet replaces the <link> to style.css (or goes at the end of <head>), and the script
 * goes at the end of <body>.
 */
export function buildWebDoc(html: string, css: string, js: string): string {
  let doc = html;
  if (css.trim() !== '') {
    const style = `<style>\n${css}\n</style>`;
    const link = /<link[^>]*href=["']style\.css["'][^>]*>/i;
    if (link.test(doc)) doc = doc.replace(link, () => style);
    else if (/<\/head>/i.test(doc)) doc = doc.replace(/<\/head>/i, () => `${style}\n</head>`);
    else doc = `${style}\n${doc}`;
  }
  if (js.trim() !== '') {
    // The student's script must not be able to close the tag early with "</script>" inside a string by accident.
    const script = `<script>\n${js.replace(/<\/script/gi, '<\\/script')}\n</script>`;
    if (/<\/body>/i.test(doc)) doc = doc.replace(/<\/body>/i, () => `${script}\n</body>`);
    else doc = `${doc}\n${script}`;
  }
  return doc;
}
