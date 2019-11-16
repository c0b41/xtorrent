/**!
 * xTorrent
 * @author c0b41 <cobaimelan@protonmail.ch>
 * @license MIT
 */

const cheerio = require('cheerio'),
  got = require('got'),
  url = 'http://1337x.to',
  validCategories = [
    'Movies',
    'TV',
    'Games',
    'Music',
    'Apps',
    'Documentaries',
    'Anime',
    'Other',
    'XXX',
  ],
  validOrderBy = ['time', 'size', 'seeders', 'leechers'],
  validSortBy = ['desc', 'asc'];

/**
 * @method search
 * @desc xTorrent search method
 * @param {object} opt - example {query:"Fight Club"}
 * @returns {function} promise
 */
const search = opt => {
  opt.category = validCategories.includes(opt.category) ? opt.category : null;
  opt.orderBy = validOrderBy.includes(opt.orderBy) ? opt.orderBy : 'seeders';
  opt.sortBy = validSortBy.includes(opt.sortBy) ? opt.sortBy : 'desc';

  let reqUrl = `${url}/sort-${
    opt.category ? 'category-' : ''
  }search/${encodeURIComponent(opt.query).replace(/%20/g, '+')}/${
    opt.category ? opt.category + '/' : ''
  }${opt.orderBy}/${opt.sortBy}/${opt.page || 1}/`;

  return got(reqUrl).then(data => {
    let $ = cheerio.load(data.body);

    let table = $('tbody > tr');

    let list = [];
    table.each((i, elem) => {
      let chunk = cheerio.load(elem);

      list[i] = {
        title: chunk('.coll-1').text(),
        href: chunk('a')
          .eq(1)
          .attr('href'),
        seed: chunk('.coll-2').text(),
        leech: chunk('.coll-3').text(),
        size: chunk('.coll-4')
          .children()
          .remove()
          .end()
          .text(),
        uploader: chunk('.coll-5').text(),
      };
    });

    return list || null;
  });
};

/**
 * @method info
 * @desc xTorrent info method
 * @param {string} url - example http://1337x.org/torrent/738327/New-Girl-S03E14-HDTV-x264-LOL/
 * @returns {function} promise
 */

const info = url => {
  return got(url).then(data => {
    let $detail = cheerio.load(data.body);
    let $content = cheerio.load($detail.html());

    let info = {};

    let title = null;

    try {
      // TODO: remove after something more clever.
      title = $detail('title').text();
      let matches = title.match(/Download(.*?) ⭐/);
      if (matches.length > 0) {
        title = matches[1].trim();
      }
    } catch (err) {
      title = $content('.box-info-heading').text();
    }

    info.title = title;

    $info_left = cheerio.load(
      $content('ul.list')
        .eq(1)
        .html(),
    );
    $info_right = cheerio.load(
      $content('ul.list')
        .eq(2)
        .html(),
    );

    info.category = $info_left('li')
      .eq(0)
      .children('span')
      .text()
      .trim();
    info.type = $info_left('li')
      .eq(1)
      .children('span')
      .text()
      .trim();
    info.language = $info_left('li')
      .eq(2)
      .children('span')
      .text()
      .trim();
    info.size = $info_left('li')
      .eq(3)
      .children('span')
      .text()
      .trim();
    info.uploaded = $info_left('li')
      .eq(4)
      .children('span')
      .text()
      .trim();

    info.downloads = $info_right('li')
      .eq(0)
      .children('span')
      .text()
      .trim();
    info.last_check = $info_right('li')
      .eq(1)
      .children('span')
      .text()
      .trim();
    info.date_uploaded = $info_right('li')
      .eq(2)
      .children('span')
      .text()
      .trim();
    info.seeders = $info_right('li')
      .eq(3)
      .children('span')
      .text()
      .trim();
    info.leechers = $info_right('li')
      .eq(4)
      .children('span')
      .text()
      .trim();

    info.download = {
      magnet: $content('ul > li > a[href^=magnet]')
        .eq(0)
        .attr('href'),
    };

    info.files = [];
    $content('.file-content ul').each((i, el) => {
      info.files.push(
        $content('.file-content ul')
          .eq(i)
          .children('li')
          .text(),
      );
    });

    return info || null;
  });
};

exports.search = search;
exports.info = info;
