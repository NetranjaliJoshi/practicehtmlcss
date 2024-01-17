import { Component } from "react";

class UpdateStateComp extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  myCount = () => {
    this.setState((prev) => ({
      count: prev.count + 1,
    }));
  };

  myDec = () => {
    this.setState((prev) => ({
      count: prev.count - 1,
    }));
  };

  render() {
    const { count } = this.state;
    return (
      <>
        <h3>Hello update state comp</h3>
        <div>
          Counter value is <strong>{count}</strong>
        </div>
        <button type="button" onClick={this.myCount}>
          Inc me
        </button>

        <button type="button" onClick={this.myDec}>
          Dec me
        </button>
      </>
    );
  }
}
export default UpdateStateComp;
