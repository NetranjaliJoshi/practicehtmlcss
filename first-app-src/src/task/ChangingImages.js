import { Component } from "react";
import data from "../shared/constant/constantdata";

class ChangingImages extends Component {
  constructor() {
    super();
    this.state = { changeImg: data.smita, count: 0 };
  }

  PrevImage = (count) => {
    const arr = [
      data.apple,
      data.jhon,
      data.kartik,
      data.smita,
      data.cherry,
      data.justin,
    ];
    console.log(arr[0]);
    this.setState((prev) => ({
      changeImg: arr[arr.length - count],
      count: prev.count - 1,
    }));
  };

  NextImage = (count) => {
    const arr = [
      data.apple,
      data.jhon,
      data.kartik,
      data.smita,
      data.cherry,
      data.justin,
    ];

    this.setState((prev) => ({
      changeImg: arr[0 + count],
      count: prev.count + 1,
    }));
  };

  render() {
    const { changeImg, count } = this.state;
    return (
      <>
        <div>
          <img src={changeImg} alt="apple" height="200px" />
        </div>
        <button onClick={() => this.PrevImage(count)}>Prev</button>
        <button onClick={() => this.NextImage(count)}>Next</button>
      </>
    );
  }
}

export default ChangingImages;
