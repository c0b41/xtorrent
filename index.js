
/**!
 * xTorrent
 * @author Ayhankuru   <cobaimelan@protonmail.ch>
 * @license MIT
 */

var cheerio = require('cheerio'),
	got     = require('got');
	url     = "http://www.1337x.to";

/**
 * @method search
 * @desc xTorrent search method
 * @param {object} opt - example {query:"Fight Club"}
 * @returns {function} promise
 */
function search(opt){
	opt.page = opt.page ? opt.page : 1;
	return got('http://www.1337x.to/search/'+encodeURIComponent(opt.query)+'/'+opt.page+'/')
	.then(function(data){

		 var $detail = cheerio.load(data.body);

		 var $list = cheerio.load($detail('.tab-detail').children().last().html());

		  var list = [];
			$list('li').each(function(i, elem) {
				var chunk = cheerio.load($list(this).html());
				list[i] ={
					title :chunk('strong').text(),
					href:url+chunk('a').eq(1).attr('href'),
					seed:chunk('.green').text(),
					leech:chunk('.red').text(),
					size:chunk('.coll-4').text(),
					uploader:{
						name:chunk('.coll-5').text(),
						href:url+chunk('.coll-5 span a').attr('href')
					}
				}
			});


		 return list || null;

	});
}

 /**
  * @method İnfo
  * @desc xTorrent info method
  * @param {string} url - example http://1337x.org/torrent/738327/New-Girl-S03E14-HDTV-x264-LOL/
  * @returns {function} promise
  */

function info(url) {
	return got(url).then(function(data){
		var $detail = cheerio.load(data.body);
		var $content = cheerio.load($detail.html());

		var info =  {};

		info.title =$content('.top-row strong').text();


		info.category = $content('.category-detail ul.list li').eq(0).children('span').text().trim();
		info.type = $content('.category-detail ul.list li').eq(1).children('span').text().trim();
		info.language = $content('.category-detail ul.list li').eq(2).children('span').text().trim();
		info.size = $content('.category-detail ul.list li').eq(3).children('span').text().trim();
		info.uploaded = $content('.category-detail ul.list li').eq(4).children('span').text().trim();

		info.downloads =$content('.category-detail ul.list li').eq(5).children('span').text().trim();
		info.last_check =$content('.category-detail ul.list li').eq(6).children('span').text().trim();
		info.date_uploaded =$content('.category-detail ul.list li').eq(7).children('span').text().trim();
		info.seeders=$content('.category-detail ul.list li').eq(8).children('span').text().trim();
		info.leechers=$content('.category-detail ul.list li').eq(9).children('span').text().trim();

		info.download ={
			magnet:$content('.category-detail ul.download-links li').eq(0).children('a').attr('href'),
			file:$content('.category-detail ul.download-links li').eq(1).children('a').attr('href'),
			direct:$content('.category-detail ul.download-links li').eq(2).children('a').attr('href')
		}


		info.files = [];
		$content('.file-container ul').each(function (i,el) {
			info.files.push($content('.file-container ul').eq(i).children('li').text());
		})

	 return info || null;
	});

};

exports.search = search;
exports.info = info;
