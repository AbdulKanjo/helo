const NewUser = (req, res, next) => {
  const db = req.app.get("db");
  const { username, password } = req.body;
  console.log(req.body);
  db.creat_user([username, password])
    .then(user => res.status(200).send(user))
    .catch(e => res.status(500).send("Something is wrong"));
};

const Login = (req, res, next) => {
  const db = req.app.get("db");
  const { username, password } = req.body;
  console.log(req.body);
  db.get_user([username, password])
    .then(user => res.status(200).send(user))
    .catch(e => res.status(500).send("Something is wrong"));
};

const getPosts = (req, res, next) => {
  const db = req.app.get("db");
  db.get_posts()
    .then(posts => res.status(200).send(posts))
    .catch(e => res.status(500).send("something is wrong"));
};

const getPostByID = (req, res) => {
  console.log(req.params);
  req.app
    .get("db")
    .get_post_byid(parseInt(req.params.post_id))
    .then(post => res.send(post[0]))
    .catch(err => console.log(err));
};

module.exports = {
  NewUser,
  Login,
  getPosts,
  getPostByID
};
