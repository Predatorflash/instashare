import React, { Component } from "react";
class Addimage extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };
  render() {
    return (
      <div>
        <h1>AddImage</h1>
        <div className=" ma5 flex items-center flex-column  black bg-light-blue  pa3 shadow-3">
          <div>
            <h3 className=" tc">Enter the url of the image to Add</h3>
          </div>
          <div>
            <input
              className="tc"
              type="url"
              placeholder="https://www.img"
              size="30"
              required
              onChange={this.handleChange}
              value={this.state.value}
            />
            <br />
          </div>
          <div>
            <button
              className="tc ma3 link dim br3 ph3 pv2 mb2 dib black bg-white  pa3 shadow-3"
              onClick={this.props.handleClick}
              value={this.state.value}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Addimage;
