var xtorrent =require('./index.js');
var expect = require('expect.js');

describe('Xtorrent Test', function () {
		
		it('New Girl Search Test', function (done) {
			xtorrent.search({query:"New Girl S03E14"},function(err,data){ 
				
				expect(err).to.exist;
				expect(data).to.be.an('object');
				expect(data[0].title).to.eql('New Girl S03E14 HDTV x264-LOL');
				expect(data[0].href).to.eql('http://www.1337x.to/torrent/738327/New-Girl-S03E14-HDTV-x264-LOL/');
				expect(data[0].size).to.eql('124.94 MB');
				expect(data[0].uploader.name).to.eql('xbex');
				expect(data.length).to.eql(8);
				done();

			});
		});

		it('New Girl İnfo Test', function (done) {
			
			xtorrent.info("http://www.1337x.to/torrent/738327/New-Girl-S03E14-HDTV-x264-LOL/",function(err,data){ 
				
				expect(err).to.exist;
				expect(data).to.be.an('object');
				expect(data.title).to.eql('New Girl S03E14 HDTV x264-LOL');
				expect(data.category).to.eql('TV');
				expect(data.size).to.eql('124.94 MB');  
				done();

			});
		});

});