import React, { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      date: new Date(),
    };
  }

  componentDidMount() {
    if (this.props.start !== undefined) {
      this.setState({ time: this.props.start });
    }
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentDidUpdate() {}

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: this.state.time - 1,
      date: new Date(),
    });
  }

  render() {
    return (
      <>
        {this.state.time > 0 && (
          <>
            <div className="col">
              <div className="item">
                <h3>Sekarang jam: {this.state.date.toLocaleTimeString()}</h3>
              </div>
            </div>
            <div className="col">
              <div className="item counter">
                <h3>Hitung mundur: {this.state.time}</h3>
              </div>
            </div>
          </>
        )}
      </>
    );
  }
}

export default Timer;
