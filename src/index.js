const axios = require('axios');
const cheerio = require('cheerio');

/**
 * YahooファイナンスのCSVをダウンロードしてくる。
 * 
 * @param {object} req リクエスト
 * @param {object} res レスポンス
 */
exports.main = async (req, res) => {
  const url = "https://indexes.nikkei.co.jp/nkave/index/component?idx=jpxnk400";
  const html = await axios.get(url);
  const $ = await cheerio.load(html.data);
  // eslint-disable-next-line no-undef
  const codes = $(".component-list .col-sm-1_5").
    map((i, item) => $(item).text()).get();
  console.log(codes.join(','));
  res.status(200).send(codes.join(','));
}
