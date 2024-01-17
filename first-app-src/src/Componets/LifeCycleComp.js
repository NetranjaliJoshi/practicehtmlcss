import React, { Component } from "react";
import ChangeColorComp from "../task/ChangeColorComp";

class LifeCycleComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: "red",
    };
  }

  //   componentDidMount() {
  //     setTimeout(() => {
  //       this.setState({ color: "bule" });
  //     }, 2000);
  //   }

  //   static getDerivedStateFromProps(props) {
  //     return {
  //       color: props.mycolor,
  //     };
  //   }

  shouldComponentUpdate() {
    return true;
  }

  ChangeColor = () => {
    this.setState({ color: "pink" });
  };
  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById(
      "beforeupdate"
    ).innerHTML = `My favourite color was Before Update ${prevState.color}`;
  }

  componentDidUpdate() {
    document.getElementById(
      "aftereupdate"
    ).innerHTML = `My favourite color was after Update ${this.state.color}`;
  }
  render() {
    return (
      <div>
        <h4>this is component LifeCyle Component</h4>
        <p>
          You have selected <strong>{this.state.color}</strong>
        </p>
        <div id="beforeupdate"></div>
        <div id="aftereupdate"></div>
        <button
          type="button"
          onClick={this.ChangeColor}
          className="btn btn-info mt-2"
        >
          Button
        </button>
      </div>
    );
  }
}

export default LifeCycleComp;
