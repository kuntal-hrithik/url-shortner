const express = require("express");
const app = express();

const fs = require("fs");
const mongoose = require("mongoose");
const { log } = require("console");

const PORT = 3000;

//connection
mongoose
  .connect("mongodb://localhost:27017/youtube")
  .then(() => console.log("mongodb connected"))
  .catch((err) => console.log(err));

//schema
const userSchema = new mongoose.Schema(
  {
    first_name: String,
    last_name: String,
    email: String,
    gender: String,
    job_title: String,
  },
  { timestamps: true }
);

//model

const User = mongoose.model("User", userSchema);

//middleware
app.use(express.urlencoded({ extended: true }));

//routes

app.get("/api/users", async (req, res) => {
  const allUsers = await User.find({});
  res.send(allUsers);
});

app.get("/users", async (req, res) => {
  const dbUsers = await User.find({});
  const html = `
  <ul>
  ${dbUsers.map((user) => {
    return `
    <li>
    <a href="/users/${user.id}">${user.first_name}</a>
    </li>
    `;
  })}
  </ul>
  `;
  res.send(html);
});

app

  .get("/api/users/:id", async (req, res) => {
    const id = await User.findById(req.params.id);
    console.log(id);

    if (!id) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.json(id);
  })
  .patch("/api/users/:id", (req, res) => {
    const id = User.findById(req.params.id);
    const updateUser = User.findOneAndUpdate(id, last_name, "kuntal");
    console.log("it is a patch request");
  })
  .delete("/api/users/:id", (req, res) => {
    const id = User.findById(req.params.id);
    const deleteUser = User.findOneAndDelete(id);
    res.send({ msg: "User deleted}" });
  });

app.post("/api/users", async (req, res) => {
  const body = req.body;
  const result = await User.create({
    first_name: body.first_name,
    last_name: body.last_name,
    email: body.email,
    gender: body.gender,
    job_title: body.job_title,
  });
  console.log(result);

  return res.status(200).json({ msg: "success" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
