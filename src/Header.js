import React, { Component } from "react";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      title: "Sanbercode Reactjs Week 3",
    };
  }
  render() {
    return (
      <header>
        <div className="container">
          <h1 className="Title">{this.state.title}</h1>
        </div>
      </header>
    );
  }
}

export default Header;
