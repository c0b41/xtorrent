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

### Simple search

```js
xtorrent.search({query:"New Girl S01E12"}).then(function (data) {
  console.log(data);
});
```

### Advanced search

```js
xtorrent.search({
  query:"Battlestar Galactica", 
  category:"TV", 
  orderBy:"time", 
  sortBy:"desc",
  page: 2
}).then(function (data) {
  console.log(data);
});
```

#### Parameters

**page**  
{integer} optional.  
If you need more results you can ask for page 2, etc. Default is 1.  

**category**  
{string} optional.  
To search only in the specified category.  
Must be one of those values: 'Movies', 'TV', 'Games', 'Music', 'Apps', 'Documentaries', 'Anime', 'Other', 'XXX'.  

**orderBy**  
{string} optional.  
To sort the results.  
Must be one of those values: 'time', 'size', 'seeders', 'leechers'. Default is 'seeders'.  

**sortBy**  
{string} optional.  
To sort the results.   
Must be one of those values: 'desc', 'asc'. Default is 'desc'.  

## İnfo


```js
xtorrent.info('http://1337x.org/torrent/738290/Brooklyn-Nine-Nine-S01E15-HDTV-x264-2HD-ettv/').then(function (data) {
  console.log(data);
})
```
