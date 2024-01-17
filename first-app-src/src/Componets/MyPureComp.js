import { Component, PureComponent } from "react";

class MyPureComp extends PureComponent {
  render() {
    return (
      console.log("From pure component"),
      (
        <>
          <h5>from MyPure Component</h5>
          <h5> Count : {this.props.myname}</h5>
          <h5>Myname : {this.props.myname}</h5>
        </>
      )
    );
  }
}
export default MyPureComp;
