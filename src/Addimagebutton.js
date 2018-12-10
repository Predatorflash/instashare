import React, { Component } from "react";

class Addimagebutton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <button
          className=" ma5 link dim br3 ph3 pv2 mb2 dib black bg-white  pa3 shadow-3"
          onClick={this.props.addimg}
        >
          <h2>+</h2>
        </button>
      </div>
    );
  }
}

export default Addimagebutton;
