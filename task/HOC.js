import React, { Component } from "react";

const HOC = (Wrapper, val) => {
  class HocComp extends Component {
    constructor() {
      super();
      this.state = { count: 0 };
    }
    incrementCount = () => {
      this.setState((prevstate) => ({ count: prevstate.count + val }));
    };

    render() {
      return (
        <>
          <Wrapper
            count={this.state.count}
            incrementCount={this.incrementCount}
          ></Wrapper>
        </>
      );
    }
  }

  return HocComp;
};

export default HOC;
