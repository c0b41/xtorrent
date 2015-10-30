[![Travis Build Status](http://img.shields.io/travis/ayhankuru/xtorrent.svg?style=flat-square)](https://travis-ci.org/ayhankuru/xtorrent) [![Circle Build Status](https://img.shields.io/circleci/project/ayhankuru/xtorrent.svg?style=flat-square)](https://circleci.com/gh/ayhankuru/xtorrent) [![Appveyor Build Status](https://img.shields.io/appveyor/ci/ayhankuru/xtorrent.svg?style=flat-square)](https://ci.appveyor.com/project/ayhankuru/xtorrent) [![Build Status](https://img.shields.io/david/ayhankuru/xtorrent.svg?style=flat-square)](https://david-dm.org/ayhankuru/xtorrent) [![io.js supported](https://img.shields.io/badge/io.js-supported-green.svg?style=flat-square)](https://iojs.org)



1337x.org simple api


## Install

```
npm install xtorrent
```

## Usage

```js
var xtorrent = require('xtorrent');
```

## Search


```js
xtorrent.search({query:"New Girl S01E12"}).then(function (data) {
  console.log(data);
});
```

## İnfo


```js
xtorrent.info('http://1337x.org/torrent/738290/Brooklyn-Nine-Nine-S01E15-HDTV-x264-2HD-ettv/').then(function (data) {
  console.log(data);
})
```
