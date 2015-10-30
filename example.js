var xtorrent = require('./');


xtorrent.search({query:"New Girl S01E12"}).then(function(data){
  console.log(data);
});


xtorrent.info('http://1337x.org/torrent/738290/Brooklyn-Nine-Nine-S01E15-HDTV-x264-2HD-ettv/').then(function(data){
  console.log(data);
});
