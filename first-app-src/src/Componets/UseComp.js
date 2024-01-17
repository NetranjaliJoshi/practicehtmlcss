import React from "react";

const UseComp = (props) => {
  // return <div>{uname}</div>;

  if (props.uname === "Netra") {
    // return "not a user";
    throw new Error("not a user");
  }
  return <h3>{props.uname} login Successfully</h3>;
};

export default UseComp;
