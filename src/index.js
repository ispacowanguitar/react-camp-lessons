import React from "react";
import ReactDOM from "react-dom";

class CounterComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
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

ReactDOM.render(<CounterComponent />, document.getElementById("root"));
