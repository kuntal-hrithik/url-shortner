const express = require("express");
const Url = require("../models/url");
const shortUrlGenerator = require("../controllers/url");
//const handleGetAnalytics = require("../controllers/url");
const router = express.Router();

router.post("/", shortUrlGenerator);

router.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  // Find the original URL from the database
  const entry = await Url.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitedHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  // Redirect to the original URL

  res.redirect(entry.redirectUrl);
});

//router.get("/analytics/:shortId", handleGetAnalytics);

module.exports = router;
