import React, { Component } from "react";
import Imageshow from "./Imageshow";
import "./index.css";
import Addimage from "./Addimagebutton";

class Imageshowlist extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    const renderr = this.props.img.map((value, i) => {
      return (
        <Imageshow
          key={i}
          id={i}
          img={value.Image}
          likes={value.likes}
          clickedcard={this.props.clickedcard}
        />
      );
    });
    return (
      <div className="centrr">
        {renderr} <Addimage addimg={this.props.addimg} />
      </div>
    );
  }
}
export default Imageshowlist;
