import { Component, Fragment } from "react";

class MyStateComp extends Component {
  constructor() {
    super();
    this.state = { myName: "Netranjali", salary: 0 };
    setTimeout(
      () => {
        //   this.setState({ salary: this.state.salary + 1, myName: "netra" });
        this.setState((prevstate) => ({
          salary: prevstate.salary + 1,
          myname: prevstate.myName + "Welcome",
        }));
      },

      2000
    );
  }
  render() {
    // destructing
    const { myName, salary } = this.state;
    return (
      <Fragment>
        <h3>this state component</h3>
        {/* <p>My name is {this.state.myName}</p>
        <p>Salary is {this.state.salary}</p>
      
        */}
        <p> myname : {myName}</p>
        <p> salary : {salary}</p>
      </Fragment>
    );
  }
}

export default MyStateComp;
