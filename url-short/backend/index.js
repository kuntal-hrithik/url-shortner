const express = require("express");
const router = require("./routes/url");
const mongoose = require("mongoose");
const app = express();
mongoose
  .connect(
    "mongodb://127.0.0.1:27017/url-short",{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Failed to connect to MongoDB", err);
  });

const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
