/* @Name xtorrent
*  @Version 0.0.0
*  @author Cobaimelan
*/

// required packages..
var seven =require('seven');

/**
 * search torrent
 * @param {str} string exam: New Girl S01E14
 * @param {fn} function 
 */
function search(str,fn){
	var go = new seven();
	go.play('http://1337x.org/srch?search='+encodeURIComponent(str),function(err,data){
		if(err){
			fn(err,null)
		}else{
			var block =go.matchall(data,'<div class="torrentName">','</div>');
			var seed =go.matchall(data,'<span class="seed">','</span>');
			var leech =go.matchall(data,'<span class="leech">','</span>');
			var size =go.matchall(data,'<span class="size">','</span>');
			if(block == null){
				fn(null,null);
			}else{
				var urls = block.map(function (post) {			
			      return {
			        title: post.clear(),
			        url: 'http://1337x.org' + go.attr(post,'href')[1]
			      };
			    });

			    for (var i = urls.length - 1; i >= 0; i--) {
			    	urls[i].seed =seed[i].clear();
			    	urls[i].leech =leech[i].clear();
			    	urls[i].size =size[i].clear();
			    };

				fn(null,urls);	

			}
		}
	});
}

/**
 *  torrent info
 * @param {urk} string exam: http://1337x.org/torrent/738327/New-Girl-S03E14-HDTV-x264-LOL/
 * @param {fn} function 
 */

function info(url,fn) {
	var go = new seven();
	go.play(url,function(err,data){ 

		if(err){
			fn(err,null);
		}else{
			var api={};
				api.info={}
			var title =go.matchall(data,'<div class="topHead">','</div>');
				title =go.matchall(title[0],'<h2>','</h2>');
			var block = go.matchall(data,'<span class="col02">','</span>');
			var block2 =go.matchall(data,'<span class="col04">','</span>');
			if(block !== null && block2 !== null && title !== null ){
					block=block.concat(block2);
					api.info.title=title[0].clear();
					api.info.type=block[0].clear();
					api.info.language=block[1].clear();
					api.info.size=block[2].clear();
					api.info.downloads=block[3].clear();
					api.info.date=block[5].clear();
					api.info.seeders=block[6].clear();
					api.info.leechers=block[7].clear();
			}
			var durl =go.matchall(data,'<div class="torrentInfoBtn">','</div>');
				if(durl !==null){
					durl =go.attr(durl[0],'href');
						durl=durl.map(function (url) {			
					      return {
					        url: url
					      };
					    });
					api.download=durl;
				}
			var list =go.matchall(data,'<div class="tracklist">','</div>');
			var	flist =go.matchall(list[0],'<li class="pft-file ext-','</li>');
				if(flist !==null){
					flist=flist.map(function (file) {			
					      return {
					        file: file.clear()
					      };
					    });
					api.file=flist;
				}
			var tlist =go.matchall(list[1],'<li>','</li>');
				if(tlist !==null ){
							tlist=tlist.map(function (track) {			
					      return {
					        track: track.clear()
					      };
					    });
					api.track=tlist;
				}
			fn(null,api);
		}
		
	});

};



exports.search=search;
exports.info=info;