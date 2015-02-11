[![Build Status](http://img.shields.io/travis/ayhankuru/xtorrent.svg?style=flat-square)](https://travis-ci.org/ayhankuru/xtorrent)

[![Build Status](https://img.shields.io/david/ayhankuru/xtorrent.svg?style=flat-square)](https://david-dm.org/ayhankuru/xtorrent)

[![io.js supported](https://img.shields.io/badge/io.js-supported-green.svg?style=flat-square)](https://iojs.org) 

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
xtorrent.search({query:"New Girl S01E12"},function(err,list){
    if(err) throw err
    else console.log(list);
});
```

## İnfo


```js
xtorrent.info('http://1337x.org/torrent/738290/Brooklyn-Nine-Nine-S01E15-HDTV-x264-2HD-ettv/',function(err,torrent){
    if(err) throw err
    else console.log(torrent);
});
```

