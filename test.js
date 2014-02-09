var xtorrent =require('./index.js');
var expect = require('expect.js');

	describe('Search Test!!!...', function(){
		it('Test :1 ', function(done){

			xtorrent.search('New Girl S03E14',function(err,data){
				expect(err).to.exist;
				expect(data).to.be.an('object');
				expect(data).to.have.length(7);
				expect(data[0].title).to.eql('New Girl S03E14 HDTV x264-LOL');
				expect(data[1].url).to.eql('http://1337x.org/torrent/738285/New-Girl-S03E14-720p-HDTV-X264-DIMENSION-PublicHD/');
				expect(data[2].size).to.eql('124.94 MB');
				done();
			});

		});

		it('Test :2 ', function(done){

		xtorrent.search('Brooklyn Nine Nine S01E15',function(err,data){
			expect(err).to.exist;
			expect(data).to.be.an('object');
			expect(data).to.have.length(8);
			expect(data[0].title).to.eql('Brooklyn Nine Nine S01E15 HDTV x264-2HD');
			expect(data[1].url).to.eql('http://1337x.org/torrent/738290/Brooklyn-Nine-Nine-S01E15-HDTV-x264-2HD-ettv/');
			expect(data[2].size).to.eql('618.69 MB');
			done();
		});

		});

	});

	describe('İnfo Test!!!...', function(){
		it('Test :1 ', function(done){
			xtorrent.info('http://1337x.org/torrent/738285/New-Girl-S03E14-720p-HDTV-X264-DIMENSION-PublicHD/',function(err,data){
				expect(err).to.exist;
				expect(data).to.be.an('object');
				expect(data.info.title).to.eql('New.Girl.S03E14.720p.HDTV.X264-DIMENSION [PublicHD]');
				expect(data.info.language).to.eql('English');
				expect(data.info.size).to.eql('619.04 MB');
				expect(data.info.downloads).to.eql(264);
				expect(data.file).to.have.length(2);
				expect(data.track).to.have.length(8);
				done();
			});

		});

		it('Test :2 ', function(done){
			xtorrent.info('http://1337x.org/torrent/738290/Brooklyn-Nine-Nine-S01E15-HDTV-x264-2HD-ettv/',function(err,data){
				expect(err).to.exist;
				expect(data).to.be.an('object');
				expect(data.info.title).to.eql('Brooklyn Nine Nine S01E15 HDTV x264-2HD[ettv]');
				expect(data.info.language).to.eql('English');
				expect(data.info.size).to.eql('159.00 MB');
				expect(data.info.downloads).to.eql(659);
				expect(data.file).to.have.length(2);
				expect(data.track).to.have.length(15);
				done();
			});

		});

	});

