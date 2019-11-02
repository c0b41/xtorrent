var xtorrent = require('./');

// Simple search
xtorrent.search({query:"New Girl S01E12"}).then(function(data){
  console.log(data);
});

// Advanced search
xtorrent.search({query:"Battlestar Galactica", category:'Movies', orderBy:'time', sortBy:'desc'}).then(function(data){
  console.log(data);
});

// Info
xtorrent.info('http://1337x.to/torrent/299916/New-Girl-S01E12-HDTV-XviD-LOL-ettv/').then(function(data){
  console.log(data);
});