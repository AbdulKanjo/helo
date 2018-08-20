require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const { NewUser, Login, getPosts, getPostByID } = require("./controller");
const massive = require("massive");
const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
  })
  .catch(e => console.log(e));

app.post("/api/auth/register", NewUser);
app.post("/api/auth/login", Login);
app.get("/api/getposts", getPosts);
app.get("/api/posts/:post_id", getPostByID);

const port = 3001;
app.listen(port, () => {
  console.log(`Server is listening ${port}`);
});
