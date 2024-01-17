import React, { Component } from "react";
import { Outlet } from "react-router-dom";

class Classcomp extends Component {
  render() {
    const { myname, post } = this.props;
    return (
      <div>
        {/* <h2>This is compontent class</h2>
        <p>
          this website Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Enim distinctio, harum impedit ipsum animi dolore reprehenderit et
          unde minus totam saepe rerum sint repudiandae ea natus voluptates.
          Nihil, impedit nobis.
        </p> */}
        <p>{myname}</p>
        <p>{post}</p>
        <Outlet />
      </div>
    );
  }
}
export default Classcomp;
