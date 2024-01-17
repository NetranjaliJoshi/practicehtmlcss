import { Component } from "react";

class RenderComp extends Component {
  constructor() {
    super();
    this.state = { isLogin: true };
  }
  render() {
    const { isLogin } = this.state;

    // if (!isLogin) {
    //   return <h1>sucess</h1>;
    // } else {
    //   return <h1>faluaire</h1>;
    // }

    //element as variable

    // let msg = "";
    // if (!isLogin) {
    //   msg = "sucess";
    // } else {
    //   msg = "faluaire";
    // }

    //return msg;

    //  ternary
    return !isLogin ? <h1>true</h1> : <h1>false</h1>;
    //short-circuit
    //return isLogin && <h1>admin</h1>;
  }
}

export default RenderComp;
