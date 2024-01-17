import { Component } from "react";
import ChildComp from "./ChildComp";
import MyPureComp from "./MyPureComp";
import ReactMemoComp from "./ReactMemoComp";

class ParentComp extends Component {
  constructor() {
    super();
    this.state = { count: 0, myname: "Netranjali" };
  }
  myCount = () => {
    this.setState((prev) => ({
      count: prev.count + 1,
      myname: "Netranjali Joshi",
    }));
  };

  render() {
    const { count, myname } = this.state;
    return (
      console.log("from parent componet"),
      (
        <>
          <h1>Parent Comp</h1>
          <h3>Hello update state comp</h3>
          <h3>MY name is : {myname}</h3>
          <div>
            Counter value is <strong>{count}</strong>
          </div>

          <button
            className="btn btn-primary"
            type="button"
            onClick={this.myCount}
          >
            Inc me
          </button>
          {/* <ChildComp count={count} myname={myname} /> */}
          <MyPureComp myname={myname}></MyPureComp>
          <ReactMemoComp myname={myname}></ReactMemoComp>
        </>
      )
    );
  }
}

export default ParentComp;
