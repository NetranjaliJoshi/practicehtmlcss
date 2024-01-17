import circle from "./external.css";
import mycss from "./cssproperty.module.css";

const MyCssComp = () => {
  const txtDanger = {
    color: "red",
    backgroundColor: "aqua",
    fontSize: "25px",
  };
  const mycssproperty = {
    color: false ? "Green" : "Pink",
    backgroundColor: true ? "aqua" : "lightgreen",
    fontSize: true ? "30px" : "20px",
    textTransform: false ? "lowercase" : "uppercase",
  };
  return (
    <>
      <h3 style={{ color: "blue" }}> this is css</h3>
      <h2 style={txtDanger}>Hello world</h2>
      <p style={mycssproperty}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est earum
        voluptates ut ducimus commodi. Ut ab excepturi odit, illo alias
        reiciendis aliquid harum architecto explicabo iste itaque voluptatem
        maiores dolorem.
      </p>

      <p className="circle"> hello everyone</p>

      {/* use of modular css */}

      <h2 className={mycss.special}> Nakane talav</h2>
    </>
  );
};

export default MyCssComp;
