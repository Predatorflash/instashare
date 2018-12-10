import React, { Component } from "react";
import Deletefromlist from "./Deletefromlist";
class ImageOpen extends Component {
  constructor(props) {
    super(props);
    this.state = { color: false, liketotal: this.props.like };
  }
  changeclass = () => {
    if (this.state.color)
      this.setState({
        color: false,
        liketotal: parseInt(this.state.liketotal) - 1
      });
    else
      this.setState({
        color: "green",
        liketotal: parseInt(this.state.liketotal) + 1
      });
  };

  render() {
    return (
      <div className="flex">
        <img
          className="br3 pa2 ma2 bg-light-green"
          src={this.props.id}
          alt="logo"
          height="320  %"
          width="480 %"
        />
        <div>
          <h1>Likes: {this.state.liketotal}</h1>
          <button
            className={`bg-${
              this.state.color
            }  ma2  dim br1  pv2 mb2 w-100  shadow-2`}
            onClick={this.changeclass}
          >
            Like
          </button>
          <Deletefromlist
            deletelist={this.props.deletelist}
            id={this.props.id}
          />
        </div>
      </div>
    );
  }
}

export default ImageOpen;
