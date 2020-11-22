const { JSDOM } = require('jsdom');


const canvasSerializer = require("jest-canvas-snapshot-serializer");

expect.addSnapshotSerializer(canvasSerializer);

test('start of game', () => {
  const dom = new JSDOM()
  global.document = dom.window.document
  global.window = dom.window
  document.body.innerHTML =
    '<div>' +
    '<canvas height="320" id="myCanvas" width="480"></canvas>' +
    '</div>';


  const { draw } = require('./game');
  draw();

  const canvas = document.getElementById("myCanvas")
  expect(canvas).toMatchSnapshot();
});

test('xxx', () => {
  const dom = new JSDOM()
  global.document = dom.window.document
  global.window = dom.window
  document.body.innerHTML =
    '<div>' +
    '<canvas height="320" id="myCanvas" width="480"></canvas>' +
    '</div>';

  const { draw, reset } = require('./game')
  reset();
  draw();
  draw();
  draw();
  draw();

  const canvas = document.getElementById("myCanvas")
  expect(canvas).toMatchSnapshot();
});