import React, { Component } from "react";
class Deletefromlist extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }
  render() {
    return (
      <button
        className=" ma5 link dim br3 ph3 pv2 mb2 dib black bg-white  pa3 shadow-3"
        onClick={this.props.deletelist}
        id={this.props.id}
      >
        Delete
      </button>
    );
  }
}

export default Deletefromlist;
