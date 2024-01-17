import React, { Component } from "react";

export class DisplayComp extends Component {
  render() {
    const txtmorning = { color: "green" };
    const txtnight = { color: "black" };
    const txtafternoon = { color: "orange" };

    const d = new Date();

    let time = d.getHours();
    let msg = "";
    console.log("this is time :" + time);

    if (time >= 12 && time <= 11) {
      msg = "Good Morning";
    }

    return (
      <div>
        <h1>Hello erveryone </h1>
      </div>
    );
  }
}

export default DisplayComp;
