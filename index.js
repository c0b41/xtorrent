
/**!
 * xTorrent
 * @author Ayhankuru   <cobaimelan@protonmail.ch>
 * @license MIT
 */

var cheerio = require('cheerio'),
	got     = require('got');
	url     = "http://1337x.to";

/**
 * @method search
 * @desc xTorrent search method
 * @param {object} opt - example {query:"Fight Club"}
 * @returns {function} promise
 */
function search(opt){
	opt.page = opt.page ? opt.page : 1;
	return got(`${url}/search/${encodeURIComponent(opt.query).replace(/%20/g, '+')}/${opt.page}/`)
	.then(function(data){

		 var $detail = cheerio.load(data.body);
		 
		 var $list = cheerio.load($detail('.table-list tbody').html());

		 var list = [];
			$list('tr').each(function(i, elem) {
				var chunk = cheerio.load($list(this).html());
				list[i] ={
					title:chunk('.coll-1').text(),
					href:`${url}${chunk('a').eq(1).attr('href')}`,
					seed:chunk('.coll-2').text(),
					leech:chunk('.coll-3').text(),
					size:chunk('.coll-4').text(),
					uploader:{
						name:chunk('.coll-5').text(),
						href:url+chunk('.coll-5 a').attr('href')
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

		info.title =$content('.box-info-heading').text();

		$info_left = cheerio.load($content('ul.list').eq(1).html());
		$info_right = cheerio.load($content('ul.list').eq(2).html());

		
		info.category = $info_left('li').eq(0).children('span').text().trim();
		info.type = $info_left('li').eq(1).children('span').text().trim();
		info.language = $info_left('li').eq(2).children('span').text().trim();
		info.size = $info_left('li').eq(3).children('span').text().trim();
		info.uploaded = $info_left('li').eq(4).children('span').text().trim();

	
		info.downloads = $info_right('li').eq(0).children('span').text().trim();
		info.last_check = $info_right('li').eq(1).children('span').text().trim();
		info.date_uploaded = $info_right('li').eq(2).children('span').text().trim();
		info.seeders = $info_right('li').eq(3).children('span').text().trim();
		info.leechers = $info_right('li').eq(4).children('span').text().trim();

		info.download ={
            magnet:$content('ul > li > a[href^=magnet]').eq(0).attr('href')
		}


		info.files = [];
		$content('.file-content ul').each(function (i,el) {
			info.files.push($content('.file-content ul').eq(i).children('li').text());
		})

	 return info || null;
	});

};

exports.search = search;
exports.info = info;
