import React from "react";
import ReactDOM from "react-dom";

class CounterComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: props.initialCount
    };
  }

  add = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  subtract = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    return (
      <div>
        <div>{this.state.count}</div>
        <button onClick={this.add}>Add</button>
        <button onClick={this.subtract}>subtract</button>
      </div>
    );
  }
}

const Counters = () => {
  return (
    <>
      <h1>Counter (starts at 1)</h1>
      <CounterComponent initialCount={1} />
      <h1>Counter (starts at 1000)</h1>
      <CounterComponent initialCount={1000} />
    </>
  );
};

ReactDOM.render(<Counters />, document.getElementById("root"));
