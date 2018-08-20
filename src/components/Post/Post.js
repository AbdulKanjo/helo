import React, { Component } from "react";
import axios from "axios";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      currentPost: ""
    };
  }
  componentDidMount() {
    this.getPostd();
  }
  getPostd() {
    axios
      .get(`/api/posts/${this.props.match.params.post_id}`)
      .then(res => this.setState({ posts: res.data }));
  }
  render() {
    console.log(this.state.posts);

    return (
      <div>
        <div>{this.state.posts.title}</div>
        <div>{this.state.posts.username}</div>
        <div>{this.state.posts.content}</div>
      </div>
    );
  }
}
export default Form;
