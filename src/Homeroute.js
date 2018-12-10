import React, { Component } from "react";

class Homeroute extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <button
        className=" ma2 link dim br3 ph3 pv2 mb2 dib black bg-light-yellow shadow-4  w-20"
        onClick={this.props.homeroute}
      >
        Back
      </button>
    );
  }
}

export default Homeroute;
