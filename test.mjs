// Run: node test.mjs
import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';

const html = readFileSync(new URL('./index.html', import.meta.url), 'utf8');
const code = html.match(/<script id="core">([\s\S]*?)<\/script>/)[1];
const { cellRects, fitLabel, placeLabel, contentBox } =
  new Function(code + '; return { cellRects, fitLabel, placeLabel, contentBox };')();

// 2x2 grid on a 200x100 page with a 10pt margin
const cells = cellRects(4, { w: 200, h: 100 }, 10);
assert.deepEqual(cells[0], { x: 10, y: 50, w: 90, h: 40 });
assert.deepEqual(cells[1], { x: 100, y: 50, w: 90, h: 40 });
assert.deepEqual(cells[2], { x: 10, y: 10, w: 90, h: 40 });

// never upscale, rotate only when it pays off
assert.deepEqual(fitLabel(100, 100, 300, 300), { rotate: false, scale: 1 });
assert.deepEqual(fitLabel(100, 200, 300, 150), { rotate: true, scale: 1 });
assert.equal(fitLabel(200, 100, 100, 100).rotate, false); // same scale: no rotation

// footprint centred horizontally, pushed to the top so it sits right under its note;
// clockwise rotation anchors at the footprint's top-left corner
assert.deepEqual(placeLabel(100, 200, { x: 0, y: 0, w: 300, h: 150 }),
  { x: 50, y: 150, width: 100, height: 200, rotate: -90 });
assert.deepEqual(placeLabel(100, 100, { x: 0, y: 0, w: 300, h: 300 }),
  { x: 100, y: 200, width: 100, height: 100, rotate: 0 });

// bounding box of non-white pixels
const px = (w, h, dark) => {
  const d = new Uint8ClampedArray(w * h * 4).fill(255);
  for (const [x, y] of dark) d.fill(0, (y * w + x) * 4, (y * w + x) * 4 + 3);
  return d;
};
assert.deepEqual(contentBox(px(4, 3, [[1, 2], [2, 1]]), 4, 3), { x0: 1, y0: 1, x1: 3, y1: 3 });
assert.equal(contentBox(px(4, 3, []), 4, 3), null);

console.log('ok');
