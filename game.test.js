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

test('hit a brick and lose a life', () => {
  const dom = new JSDOM()
  global.document = dom.window.document
  global.window = dom.window
  document.body.innerHTML =
    '<div>' +
    '<canvas height="320" id="myCanvas" width="480"></canvas>' +
    '</div>';

  const { draw, reset } = require('./game')
  reset();
  for (i=1;i<200;i++){
    draw();
  }

  const canvas = document.getElementById("myCanvas")
  expect(canvas).toMatchSnapshot();
});

test('die', () => {
  const dom = new JSDOM()
  global.document = dom.window.document
  global.window = dom.window

  document.body.innerHTML =
    '<div>' +
    '<canvas height="320" id="myCanvas" width="480"></canvas>' +
    '</div>';

  const { draw, reset } = require('./game')
  const spyShow = jest.fn();
  reset(spyShow);

  for (i=1;i<1200;i++){
    draw();
  }

  const canvas = document.getElementById("myCanvas")
  expect(canvas).toMatchSnapshot();
  expect(spyShow).toBeCalledWith("Something")
});

xtest('alert', () => {
  const dom = new JSDOM()
  global.document = dom.window.document
  global.window = dom.window
  
  jest.spyOn(window, 'alert').mockImplementation(() => {});

  alert("something")

  expect(window.alert).toBeCalledWith("something");
});