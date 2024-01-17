const HoverComp = () => {
  const greet = () => {
    window.alert("welcome you all ");
  };
  const fun = (name) => {
    window.alert(`welcome ${name}`);
  };
  return (
    <>
      <h5>this is hover component</h5>
      <h4 onMouseOver={greet}>hover on me to call greet</h4>
      <button onClick={() => fun("Netra")}>click me</button>
    </>
  );
};

export default HoverComp;
