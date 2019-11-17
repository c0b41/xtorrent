const xtorrent = require('./index.js');
const expect = require('expect.js');

describe('Xtorrent Test', () => {
  it('New Girl Search Test', () => {
    return xtorrent.search({query: 'New Girl S03E14'}).then(data => {
      expect(data).to.be.an('object');
      expect(data.torrents[0].title).to.eql('New Girl S03E14 HDTV x264-LOL');
      expect(data.torrents[0].href).to.eql(
        '/torrent/738327/New-Girl-S03E14-HDTV-x264-LOL/',
      );
      expect(data.torrents[0].size).to.eql('124.9 MB');
      expect(data.torrents[0].uploader).to.eql('xbex');
      expect(data.torrents.length).to.eql(8);
    });
  });

  it('New Girl İnfo Test', () => {
    return xtorrent
      .info('http://www.1337x.to/torrent/738327/New-Girl-S03E14-HDTV-x264-LOL/')
      .then(data => {
        expect(data).to.be.an('object');
        expect(data.title).to.eql('New Girl S03E14 HDTV x264-LOL');
        expect(data.category).to.eql('TV');
        expect(data.size).to.eql('124.9 MB');
      });
  });
});
