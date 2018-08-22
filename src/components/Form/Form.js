import React, { Component } from "react";
import axios from "axios";
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: ""
    };
  }

  handelTitle(newT) {
    this.setState({ title: newT });
  }

  handelContent(newC) {
    this.setState({ content: newC });
  }
  handelButton() {
    axios
      .post(`/api/new?title=${this.state.title}&content=${this.state.content}`)
      .then(res => {
        console.log(res);
      });
  }

  render() {
    return (
      <div>
        <input onChange={e => this.handelTitle(e.target.value)} />
        <input onChange={e => this.handelContent(e.target.value)} />
        <button onClick={() => this.handelButton()}>submit</button>
      </div>
    );
  }
}

export default Form;
