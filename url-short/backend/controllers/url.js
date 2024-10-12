const Url = require("../models/url");
const short = require("shortid");
async function shortUrlGenerator(req, res) {
  const shortId = short();
  await Url.create({
    shortId: shortId,
    redirectUrl: req.body.url,
    visitedHistory: [
      {
        timestamp: Date.now(),
      },
    ],
  });
  res.json({ shortId });
}

// async function handleGetAnalytics(req, res) {
//   const shortId = req.params.shortId;
//   const entry = await Url.findOne({ shortId });
//   res.json(entry.visitedHistory.length);
// }

module.exports = shortUrlGenerator;
