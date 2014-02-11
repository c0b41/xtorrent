[![Build Status](https://travis-ci.org/cobaimelan/xtorrent.png?branch=master)](https://travis-ci.org/cobaimelan/xtorrent)

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
xtorrent.search('New Girl S01E12 ',function(err,list){
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

