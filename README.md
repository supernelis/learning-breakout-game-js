# Breakout game

The goal of this repo is to learn writing a game in vanilla javascript. 

It is inspired by https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript.

https://mob.sh/

brew install remotemobprogramming/brew/mob


## Install jest

```
brew install node

npm init

npm install --save-dev jest
```

add command to package.json to run jest


```
{
  "scripts": {
    "test": "jest"
  }
}
```

## Mocking the DOM for Jest

```
brew install pixman pkg-config cairo pango libpng jpeg giflib
```

```
const { JSDOM } = require('jsdom');
const dom = new JSDOM()
global.document = dom.window.document
global.window = dom.window
```

Inside test:

```
  document.body.innerHTML =
    '<div>' +
    '<canvas height="320" id="myCanvas" width="480"></canvas>' +
    '</div>';
```

Install canvas package:

```
npm install --save-dev canvas
```

Install jest-canvas-snapshot-serializer

```
npm install --save-dev jest-canvas-snapshot-serializer
```

if it fails, it's fine :)

## docker

### First time set up

1. `docker-compose run node bash`
1. (inside docker container): `npm install`
1. (inside docker container): `npm install --save-dev jest-canvas-snapshot-serializer`