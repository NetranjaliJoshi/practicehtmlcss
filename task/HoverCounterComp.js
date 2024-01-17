import { Component } from "react";
import HOC from "./HOC";

class HoverCounterComp extends Component {
  //   constructor() {
  //     super();
  //     this.state = { count: 0 };
  //   }
  //   Prahover = () => {
  //     this.setState((prev) => ({
  //       count: prev.count + 1,
  //     }));
  //   };
  render() {
    // const { count } = this.state;
    return (
      //   <>
      //     <h4>{count}</h4>
      //     <p onMouseOver={() => this.Prahover(count)}>
      //       This is very import session
      //     </p>
      //   </>
      <>
        <h5>This HoverCounterComp</h5>
        <p>
          Counter value is : <strong>{this.props.count}</strong>
        </p>
        <p onMouseOver={this.props.incrementCount}>Move mouse over me</p>
      </>
    );
  }
}

export default HOC(HoverCounterComp, 5);
