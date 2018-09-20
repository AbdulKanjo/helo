import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterString: "",
      myPosts: true,
      posts: []
    };
    this.handleSearch = this.handleSearch.bind(this);
  }
  componentDidMount() {
    Axios.get("/api/getposts").then(res => this.setState({ posts: res.data }));
  }

  handleSearch(filter) {
    this.setState({ filterString: filter });
  }

  handleReset() {
    this.setState({ filterString: "" });
  }

  handleCheckBox() {
    this.setState({ myPosts: false });
  }

  render() {
    console.log(this.state.posts);

    let posts = this.state.posts
      .filter((e, i) => {
        return e.title
          .toUpperCase()
          .includes(this.state.filterString.toUpperCase());
      })
      .map((e, i) => {
        return (
          <div style={{ border: "1px solid" }} key={i}>
            <div>{e.title}</div>
            <div>by {e.username}</div>
            <Link to={`/post/${e.post_id}`}> Here! </Link>
          </div>
        );
      });
    return (
      <div>
        <div>
          <input
            className="search"
            placeholder="Search"
            onChange={e => this.handleSearch(e.target.value)}
          />
          <button onClick={() => this.handleReset()}>Reset</button>
          <label>My POsts</label>
        </div>
        {posts}
      </div>
    );
  }
}
export default Dashboard;
