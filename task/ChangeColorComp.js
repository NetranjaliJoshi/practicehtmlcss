import React, { Component } from "react";

export class ChangeColorComp extends Component {
  constructor() {
    super();
    this.state = { color: { color: "black" } };
  }

  ChangeColorRed = () => {
    const txtred = {
      color: "red",
    };

    this.setState((prev) => ({
      color: txtred,
    }));
  };
  ChangeColorGreen = () => {
    const txtGreen = {
      color: "green",
    };
    this.setState((prev) => ({
      color: txtGreen,
    }));
  };
  render() {
    const { color } = this.state;

    return (
      <div>
        <h5>Color change componet</h5>

        <p style={color}>Infoway Technology</p>
        <button onClick={() => this.ChangeColorRed()}>Red</button>
        <button onClick={() => this.ChangeColorGreen()}>Green</button>
      </div>
    );
  }
}

export default ChangeColorComp;
