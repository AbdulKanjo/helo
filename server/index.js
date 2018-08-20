require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const { NewUser, Login, getPosts, getPostByID } = require("./controller");
const massive = require("massive");
const app = express();
app.use(bodyParser.json());
const session = require("express-session");
app.use(express.static(`${__dirname}/../build`));

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
  })
  .catch(e => console.log(e));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7 * 2 //2 weeks
    }
  })
);

app.post("/api/auth/register", NewUser);
app.post("/api/auth/login", Login);
app.get("/api/getposts", getPosts);
app.get("/api/posts/:post_id", getPostByID);

const port = 3001;
app.listen(port, () => {
  console.log(`Server is listening ${port}`);
});
