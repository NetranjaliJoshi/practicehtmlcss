import { Component } from "react";
import data from "../shared/constant/constantdata";

class ToggleImages extends Component {
  constructor() {
    super();
    this.state = { changeImg: data.smita };
  }

  toggleImage = (changeImg) => {
    console.log(changeImg);
    if (changeImg == data.apple) {
      var img = data.smita;
    } else {
      img = data.apple;
    }

    this.setState((prev) => ({
      changeImg: img,
    }));
  };

  render() {
    const { changeImg } = this.state;
    return (
      <>
        <div>
          <img src={changeImg} alt="apple" height="200px" />
        </div>
        <button onClick={() => this.toggleImage(changeImg)}>Toggle</button>
      </>
    );
  }
}

export default ToggleImages;
