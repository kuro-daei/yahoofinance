const axios = require('axios');
const cheerio = require('cheerio');
const { BigQuery } = require('@google-cloud/bigquery');

const bigquery = new BigQuery();

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

  // table 全削除
  let query = 'DELETE FROM `yahoofinance-data.nikkei400.codes` WHERE true';
  let options = {
    query,
    location: 'asia-northeast1'
  };
  await bigquery.createQueryJob(options);

  // codes テーブル データ追加
  query = 'INSERT `yahoofinance-data.nikkei400.codes` (code) VALUES(';
  query += codes.join('),(');
  query += ')';
  options = {
    query,
    location: 'asia-northeast1'
  };
  await bigquery.createQueryJob(options);
  res.status(200).send(codes.join(','));
}
