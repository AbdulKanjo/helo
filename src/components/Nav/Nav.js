import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
class Nav extends Component {
  logout = e => {
    Axios.post("/api/logout").then(() => {
      return <Redirect to="/" />;
    });
  };
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
          <Link to="/new">New Post</Link>
        </button>
        <button onClick={this.logout}>
          <Link to="/">Logout</Link>
        </button>
      </div>
    );
  }
}
const mapStateToProps = state => state;
export default connect(mapStateToProps)(Nav);
