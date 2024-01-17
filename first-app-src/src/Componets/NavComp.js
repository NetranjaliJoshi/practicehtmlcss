import React from "react";
import { Link } from "react-router-dom";
const NavComp = () => {
  return (
    <div>
      <Link to="/carosal" className="btn btn-outline-primary btn-sm">
        Carosal
      </Link>
      <Link to="/list" className="btn btn-outline-primary btn-sm">
        Favcolor
      </Link>{" "}
      <Link to="/multimedia" className="btn btn-outline-primary btn-sm">
        multimedia
      </Link>{" "}
      <Link to="/frm/:id" className="btn btn-outline-primary btn-sm">
        Favcolor
      </Link>{" "}
      <Link to="/classcomp/my" className="btn btn-outline-primary btn-sm">
        Class Comp
      </Link>{" "}
      <Link to="/hooks" className="btn btn-outline-primary btn-sm">
        Hooks
      </Link>
      <Link to="/curd" className="btn btn-outline-primary btn-sm">
        CURD
      </Link>
    </div>
  );
};

export default NavComp;
