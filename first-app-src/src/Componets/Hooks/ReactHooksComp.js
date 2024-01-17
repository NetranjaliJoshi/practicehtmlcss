import React from "react";
import { Outlet, Link } from "react-router-dom";
const ReactHooksComp = () => {
  return (
    <div>
      <h2>this is hooks Component</h2>
      <div className="card border-primary">
        <div className="card-header border-primary">
          <Link to="usestate" className="btn btn-outline-primary btn-sm">
            UseState
          </Link>
          <Link to="useffect" className="btn btn-outline-primary btn-sm">
            UseEffect
          </Link>
        </div>
        <div className="card-body border-primary">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ReactHooksComp;
