import React, { useState } from "react";

const UseStateHookComp = () => {
  const [count, setCount] = useState(0);
  const [myname, setMyname] = useState("Netranjali Joshi");
  const incrementCount = () => {
    setCount(count + 1);
  };
  const [friuts, setFruits] = useState([
    "apple",
    "graps",
    "banana",
    "mango",
    "chiko",
  ]);
  return (
    <div>
      <h5>use state</h5>
      <p>
        Count value is : <strong>{count}</strong>
        {""}
        {/* <button type="button" onClick={incrementCount}>
          count++
        </button> */}
        <h5>
          my name is : <strong>{myname}</strong>
        </h5>
        <button type="button" onClick={() => setCount(count + 1)}>
          count++
        </button>
        <button type="button" onClick={() => setCount(count - 1)}>
          Count--
        </button>
        <button type="button" onClick={() => setMyname("Netra Joshi")}>
          change name
        </button>
        <p>
          <ul>
            {friuts.map((val, index) => {
              return <li key={index}>{val}</li>;
            })}
          </ul>
        </p>
      </p>
    </div>
  );
};

export default UseStateHookComp;
