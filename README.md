## 1337x Unoffical api module

## Install

```
npm install xtorrent
```

## Usage

```js
const xtorrent = require('xtorrent');
```

## Search

### Simple search

```js
xtorrent.search({query: 'New Girl S01E12'}).then(data => {
  console.log(data);
});
```

### Advanced search

```js
xtorrent
  .search({
    query: 'Battlestar Galactica',
    category: 'TV',
    orderBy: 'time',
    sortBy: 'desc',
    page: 2,
  })
  .then(data => {
    console.log(data);
  });
```

#### Parameters

**url**  
{string} optional.  
If you need to use custom domain.

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
xtorrent
  .info(
    'http://1337x.org/torrent/738290/Brooklyn-Nine-Nine-S01E15-HDTV-x264-2HD-ettv/',
  )
  .then(data => {
    console.log(data);
  });
```
