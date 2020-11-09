const { JSDOM } = require('jsdom');
const dom = new JSDOM()
global.document = dom.window.document
global.window = dom.window

test('adds 1 + 2 to equal 3', () => {
  document.body.innerHTML =
    '<div>' +
    '<canvas height="320" id="myCanvas" width="480"></canvas>' +
    '</div>';
  const sum = require('./game');
  expect(sum(1, 2)).toBe(3);
});