import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
class Nav extends Component {
  render() {
    return (
      <div className="header">
        <div>{this.props.username || "not loged in "}</div>
        <img
          alt="sdfef"
          width="60px"
          src={this.props.profile_pic || "https://robohash.org/asd"}
        />
        <button>
          <Link to="/dashboard">Home</Link>
        </button>
        <button>
          <Link to="/post/:postid">New Post</Link>
        </button>
        <button>
          <Link to="/">Logout</Link>
        </button>
      </div>
    );
  }
}
const mapStateToProps = state => state;
export default connect(mapStateToProps)(Nav);
