import React, { useEffect, useState } from "react";

const UseEffectComp = () => {
  const [count, setCount] = useState(0);
  const [sal, setsal] = useState(1000);
  // 1. with no dependency
  //   useEffect(() => {
  //     setCount(count + 1);
  //   });

  //   // 2. using dependency as blank array
  //   useEffect(() => {
  //     setCount(count + 1);
  //   }, []);

  //using dependancy as blank array => it executes only

  useEffect(() => {
    setCount(count + 1);
  }, [sal]);

  const incrementSal = () => {
    setsal(sal + 1);
  };
  return (
    <div>
      <h5>usee effect</h5>
      <p>
        Counter value <strong>{count}</strong>
      </p>

      <p>
        Counter value <strong>{sal}</strong>
      </p>
      <button type="button" onClick={incrementSal}>
        increment Salary
      </button>
    </div>
  );
};

export default UseEffectComp;
