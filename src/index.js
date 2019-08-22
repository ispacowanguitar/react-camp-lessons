import React from "react";
import ReactDOM from "react-dom";

class HelloWorldComponent extends React.Component {
  render() {
    return <div>Hello World Component!</div>;
  }
}

ReactDOM.render(<HelloWorldComponent />, document.getElementById("root"));
