import React, { useEffect, useState } from "react";
import axios from "axios";
import { Outlet, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

const DashboardComp = () => {
  const [product, setProduct] = useState([]);
  const [show, setShow] = useState(false);
  const [item, setItem] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = (data) => {
    setItem(data);
    setShow(true);
  };

  useEffect(() => {
    fechData();
  }, []);

  // this is get request
  const fechData = () => {
    axios
      .get("http://localhost:8888/product")
      .then((res) => {
        console.log(res);
        setProduct(res.data);
      })
      .catch((err) => {});
  };

  // this delete request
  const deleteProduct = (id) => {
    if (window.confirm(`Are you sure to delete record with id : ${id}`)) {
      axios.delete(`http://localhost:8888/product/${id}`).then(() => {
        window.alert("Product deleleted Successfully");
        fechData();
      });
    }
  };
  return (
    <div>
      <h1>dash board</h1>
      <Link to="/add" className="btn btn-primary mb-1 mt-1">
        Add
      </Link>

      <table className="table table-hover table-striped">
        <thead>
          <tr>
            <th>Sr no</th>
            <th>Name</th>
            <th>Price</th>
            <th>Company</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {product.map((val, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{val.name}</td>
                <td>{val.price}</td>
                <td>{val.company}</td>
                <td>
                  <Button
                    variant="outline-success"
                    onClick={() => handleShow(val)}
                  >
                    view <i class="fa fa-eye" aria-hidden="true"></i>
                  </Button>

                  <Link
                    to={`/edit/${val.id}`}
                    className="btn btn-outline-success  btn-sm mr-2"
                  >
                    <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                  </Link>
                  <button
                    className="btn btn-outline-danger  btn-sm mr-2"
                    onClick={() => deleteProduct(val.id)}
                  >
                    <i class="fa fa-trash-o" aria-hidden="true"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{item.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table className="table table-hover table-striped">
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Comapy</th>
              <th>price</th>
            </tr>
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.company}</td>
              <td>{item.price}</td>
            </tr>
          </table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DashboardComp;
