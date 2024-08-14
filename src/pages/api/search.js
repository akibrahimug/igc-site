// To be replaced with external API
export default async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  const market = req.query.market;
  //  const searchResult = await getBlogArticlesByTermFromStoryblok(market, req.query.term)
  const searchResult = [];
  res.end(JSON.stringify(searchResult));
};
