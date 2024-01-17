import React from "react";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import data from "../shared/constant/constantdata";
const MyCorosalComp = () => {
  return (
    <div>
      <h5>MyCorosalComp</h5>
      <Button variant="primary">Primary</Button>{" "}
      <Button variant="secondary">Secondary</Button>{" "}
      <Carousel>
        <Carousel.Item>
          <img
            src={data.justin}
            alt="img"
            style={{ width: "100%", height: "600px" }}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={data.cherry}
            alt="img"
            style={{ width: "100%", height: "600px" }}
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={data.kartik}
            alt="img"
            style={{ width: "100%", height: "600px" }}
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default MyCorosalComp;
