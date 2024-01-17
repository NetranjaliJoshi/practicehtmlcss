import React, { Component } from "react";

class MyClassComp extends Component {
  render() {
    return (
      <div>
        <h1>this is class component</h1>
        <p>
          My name : <strong>{this.props.myname}</strong>
        </p>
        <p>
          Post <strong>{this.props.post}</strong>
        </p>
      </div>
    );
  }
}

export default MyClassComp;
