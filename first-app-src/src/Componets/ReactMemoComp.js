import React from "react";
const ReactMemoComp = (props) => {
  return (
    console.log("this react memo component"),
    (
      <>
        <h2>This react memo Componet</h2>
        <p>My name is {props.myname}</p>
      </>
    )
  );
};

export default React.memo(ReactMemoComp);
