import React, { Component } from "react";

export class RenderPropsComp extends Component {
  constructor(props) {
    super(props);

    this.state = { count: 0 };
  }
  incrementCount = () => {
    this.setState((prev) => ({
      count: prev.count + 1,
    }));
  };
  render() {
    return (
      <div>
        <h2>This is render props Componet </h2>
        {/* <h3>My name is : {this.props.render(false)}</h3> */}
        <p>{this.props.render(this.state.count, this.incrementCount)}</p>
      </div>
    );
  }
}

export default RenderPropsComp;
