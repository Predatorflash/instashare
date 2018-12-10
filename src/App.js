import React, { Component } from "react";

import Imageshowlist from "./Imageshowlist";
import { Imagedata } from "./Imagedata";
import ImageOpen from "./ImageOpen";
import Homeroute from "./Homeroute";
import Addimage from "./Addimage";

//import Axios from "axios";
import "./App.css";
import "tachyons";
import Particles from "react-particles-js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      addimgnotclick: true,
      imagenotclick: true,
      imageid: "",
      instalist: Imagedata,
      likes: "",
      comment: {}
    };
  }
  clickedcard = e => {
    console.log(e.target);
    this.setState({
      imagenotclick: false,
      imageid: e.target.getAttribute("image"),
      likes: e.target.getAttribute("impression")
    });
  };
  homeroute = e => {
    this.setState({
      imagenotclick: true,
      imageid: "",
      likes: "",
      addimgnotclick: true
    });
  };
  addimgtolist = e => {
    console.log(e.target.value);
    this.state.instalist.push({
      Image: e.target.value,
      likes: 0
    });
    this.homeroute();
  };
  deletelist = e => {
    console.log("indedle");

    this.state.instalist.splice(
      this.state.instalist.findIndex(x => x.Image === e.target.id),
      1
    );
    this.homeroute();
  };

  addimg = e => {
    this.setState({ addimgnotclick: false });
  };
  //Cannot make axios call because bad configuration of server!!!!!
  //RESOLUTion is super bad :(
  // componentDidMount = () => {
  //   //Making call to API
  //   Axios.get("http://starlord.hackerearth.com/insta", {
  //     headers: {
  //       "Access-Control-Allow-Origin": "*",
  //       "Content-Type": "application/json"
  //     }
  //   })
  //     .then(res => {
  //       console.log("resposnse axios", res);
  //       this.setState({ instalist: res.data });
  //     })
  //     .catch(console.log("errro"));
  // };\

  parappt = {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 800
        }
      },
      line_linked: {
        shadow: {
          enable: true,
          color: "#3CA9D1",
          blur: 5
        }
      }
    }
  };

  render() {
    return (
      <div>
        <Particles className="particles" params={this.parappt} />
        <header>
          <h1 className="f1 lh-solid centrr">Imageshare</h1>
          <hr />
        </header>
        <div>
          {this.state.imagenotclick && this.state.addimgnotclick ? (
            <div>
              <Imageshowlist
                img={this.state.instalist}
                clickedcard={this.clickedcard}
                addimg={this.addimg}
              />
            </div>
          ) : (
            <div>
              <div className="tr mr3">
                <Homeroute homeroute={this.homeroute} />
              </div>
              {this.state.addimgnotclick ? (
                <div className="centrr">
                  <ImageOpen
                    id={this.state.imageid}
                    like={this.state.likes}
                    deletelist={this.deletelist}
                  />
                </div>
              ) : (
                <div>
                  <Addimage handleClick={this.addimgtolist} />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
