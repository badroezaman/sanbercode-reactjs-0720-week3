import React, { Component } from "react";

// function Counter(props) {
//   const count = props.count;
// }

class Count extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: this.props.default,
      date: new Date(),
    };
  }

  componentDidMount() {
    if (this.props.start !== undefined) {
      this.setState({ time: this.props.start });
    }
    this.timerID = setInterval(() => this.tick(), 1000);
  }

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
    // return <>Hitung mundur: {this.state.time}</>;
    return (
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
    );
  }
}

class Counter extends Component {
  render() {
    return <Count default={10} />;
  }
}

export default Counter;
