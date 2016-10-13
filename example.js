var xtorrent = require('./');


xtorrent.search({query:"New Girl S01E12"}).then(function(data){
  console.log(data);
});


xtorrent.info('http://1337x.to/torrent/299916/New-Girl-S01E12-HDTV-XviD-LOL-ettv/').then(function(data){
  console.log(data);
});
