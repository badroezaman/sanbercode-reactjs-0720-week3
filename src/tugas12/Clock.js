import React, { Component } from "react";

// function Clocks(props) {
//   return <h2>Sekarang jam {props.date.toLocaleTimeString()}.</h2>;
// }

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <>
        <h3>Sekarang jam: {this.state.date.toLocaleTimeString()}</h3>
      </>
    );
  }
}

export default Clock;
