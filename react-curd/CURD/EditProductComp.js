import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditProductComp = () => {
  // used take id from url which we mention in google url
  const { id } = useParams();
  const nav = useNavigate();
  const [item, setItem] = useState({
    id: "",
    name: "",
    price: "",
    company: "",
  });
  useEffect(() => {
    axios
      .get(`http://localhost:8888/product/${id}`)
      .then((res) => {
        console.log(res.data);
        setItem(res.data);
      })
      .catch((err) => {});
  }, []);

  const inputChangeHandler = (event) => {
    // event has three values here we destructuning it
    //console.log(event.target.type);
    //console.log(event.target.name);
    //console.log(event.target.value);

    const { type, name, value } = event.target;

    //the spread operator can be used to spread an object of props onto an element in a React component, making it easier to pass
    //it not used spread opertor only last elemet is printed in console
    setItem({ ...item, [name]: value });
  };

  const addProduct = (event) => {
    //use to stop retesh of page
    event.preventDefault();
    console.log(item);

    axios
      .put(`http://localhost:8888/product/${id}`, item)
      .then(() => {
        window.alert("product updated  Successfully");

        //this navigate to dashboard component
        //this path is given in router component
        nav("/curd");
      })
      .catch((err) => {});
  };

  return (
    <div className="justify-content-center align-items-center">
      {/* onSubmit is called when we click on submit botton and page goes to next page */}
      <form style={{ width: "400px" }} onSubmit={addProduct}>
        <div className="form-group">
          <label className="from-label mt-3">Enter Product Name</label>
          <input
            type="text"
            name="name"
            className="form-control mt-1"
            value={item.name}
            onChange={inputChangeHandler}
          />
        </div>
        <div className="form-group mt-3">
          <label className="from-label">Enter Product Price</label>
          <input
            type="text"
            name="price"
            className="form-control mt-1"
            value={item.price}
            onChange={inputChangeHandler}
          />
        </div>
        <div className="form-group mt-3">
          <label className="from-label">Enter Product Company</label>
          <input
            type="text"
            name="company"
            className="form-control mt-1"
            value={item.company}
            onChange={inputChangeHandler}
          />
        </div>

        <button type="submit" className="btn btn-primary mt-3">
          {" "}
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditProductComp;
