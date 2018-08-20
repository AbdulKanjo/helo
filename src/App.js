import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import route from "./route";
import Nav from "./components/Nav/Nav";
import { withRouter } from "react-router-dom";
import store from "./ducks/store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          {this.props.location.pathname !== "/" && <Nav />}
          {route}
        </div>
      </Provider>
    );
  }
}

export default withRouter(App);
