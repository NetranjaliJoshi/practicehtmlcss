import React, { useRef } from "react";
import { Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const LoginComp = () => {
  let uid = useRef();
  let upass = useRef();
  let udata = [];
  const nav = useNavigate();
  const getData = () => {
    let uId = uid.current.value;
    let Upass = upass.current.value;

    axios
      .get("http://localhost:8888/user")
      .then((res) => {
        udata = res.data;
        const validUser = udata.filter((val) => {
          return val.userId === uId && val.userpass === Upass;
        });
        if (validUser.length > 0) {
          nav("/curd");
          sessionStorage.setItem("user", uId);
        } else {
          window.alert("Worng choice");
        }
      })
      .catch((err) => {});
  };
  return (
    <div
      style={{
        width: "500px",
        border: "5px ",
        textAlign: "center",
        justifyContent: "center",
      }}
    >
      <form action="">
        <input
          type="text"
          className="form-control mb-2 mt-2"
          placeholder="username"
          ref={uid}
          name="uid"
        />
        <input
          type="text"
          className="form-control mb-2 mt-2"
          placeholder="password"
          ref={upass}
          name="upass"
        />

        <div className="d-grid">
          <button type="button" className="btn btn-primary" onClick={getData}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginComp;
