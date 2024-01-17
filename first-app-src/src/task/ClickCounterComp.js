import { Component } from "react";
import HOC from "./HOC";

class ClickCounterComp extends Component {
  //   constructor() {
  //     super();
  //     this.state = { count: 0 };
  //   }
  //   incrementvalue = (count) => {
  //     this.setState((prev) => ({
  //       count: prev.count + 1,
  //     }));
  //   };
  render() {
    // const { count } = this.state;
    return (
      //   <>
      //     <h5>{count}</h5>
      //     <button onClick={() => this.incrementvalue(count)}>Click me</button>
      //   </>
      <>
        <h5>This is ClickCounterComp</h5>
        <p>
          Counter Value is :<strong>{this.props.count}</strong>
        </p>
        <button type="button" onClick={this.props.incrementCount}>
          incr count
        </button>
      </>
    );
  }
}

export default HOC(ClickCounterComp, 2);
