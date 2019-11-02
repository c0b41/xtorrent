var xtorrent = require('./');

;(async () => {

// Simple search
try {
  console.log(await xtorrent.search({query:"New Girl S01E12"}))
} catch (error) {
  console.log(error)
}

// Advanced search
try {
  console.log(await xtorrent.search({query:"Battlestar Galactica", category:'Movies', orderBy:'time', sortBy:'desc'}))
} catch (error) {
  console.log(error)
}

// Info
try {
  console.log(await xtorrent.info('http://1337x.to/torrent/299916/New-Girl-S01E12-HDTV-XviD-LOL-ettv/'))
} catch (error) {
  console.log(error)
}

})()