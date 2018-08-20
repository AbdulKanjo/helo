import React, { Component } from "react";
import Axios from "axios";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { updateUsername } from "../../ducks/reducer";
import "./Auth.css";
class Auth extends Component {
  constructor() {
    super();
    this.state = {
      // username: "", redux
      password: "",
      fireRedirect: false
    };
  }
  handelUsername(name) {
    this.setState({ username: name });
  }

  handelPassword(newPass) {
    this.setState({ password: newPass });
  }

  addUser() {
    Axios.post("/api/auth/register", {
      username: this.props.username,
      password: this.state.password
    }).then(() => {
      this.setState(() => ({
        fireRedirect: true
      }));
    });
  }

  Login() {
    Axios.post("/api/auth/login", {
      username: this.props.username,
      password: this.state.password
    }).then(() => {
      this.setState(() => ({
        fireRedirect: true
      }));
    });
  }

  render() {
    const { updateUsername } = this.props;
    return (
      <div className="auth-box">
        <div>
          <input
            placeholder="username"
            onChange={e => updateUsername(e.target.value)}
          />
          <input
            placeholder="password"
            onChange={e => this.handelPassword(e.target.value)}
          />
        </div>
        <div>
          <button onClick={() => this.Login()}>Login</button>
          <button onClick={() => this.addUser()}>Register</button>
          {this.state.fireRedirect && <Redirect to={"/dashboard"} />}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => state;
export default connect(
  mapStateToProps,
  { updateUsername }
)(Auth);
