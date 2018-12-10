import React, { Component } from "react";

class Imageshow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        className={`bg-light-green dib br3 pa1 ma3 grow bw4 shadow-5 `}
        onClick={this.props.clickedcard}
        image={this.props.img}
        impression={this.props.likes}
      >
        <img
          src={this.props.img}
          alt="logo"
          height="150  %"
          width="150 %"
          onClick={this.props.clickedcard}
          image={this.props.img}
          impression={this.props.likes}
        />
      </div>
    );
  }
}

export default Imageshow;
