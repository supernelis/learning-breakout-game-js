const { JSDOM } = require('jsdom');
const dom = new JSDOM()
global.document = dom.window.document
global.window = dom.window

const canvasSerializer = require("jest-canvas-snapshot-serializer");

expect.addSnapshotSerializer(canvasSerializer);

test('score is 0', () => {
  document.body.innerHTML =
    '<div>' +
    '<canvas height="320" id="myCanvas" width="480"></canvas>' +
    '</div>';
  
  require('./game');
  const canvas = document.getElementById("myCanvas")
  expect(canvas).toMatchSnapshot();
});

test("my awesome test", () => {
  const canvas = document.createElement("canvas");

  // canvas must have a width and height attribute
  // otherwise there is no image to serialize
  canvas.setAttribute("width", "200");
  canvas.setAttribute("height", "200");

  expect(canvas).toMatchSnapshot();
});