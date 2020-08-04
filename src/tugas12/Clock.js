import React, { Component } from "react";
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
        <div className="col">
          <div className="item">
            <h3>Sekarang jam: {this.state.date.toLocaleTimeString()}</h3>
          </div>
        </div>
      </>
    );
  }
}

export default Clock;
