import React, { Component } from "react";

export class EmployeeCurd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employee: [{ id: 101, Ename: "netra", post: "MERN Stack Devloper" }],
    };
  }

  render() {
    return <div></div>;
  }
}

export default EmployeeCurd;
