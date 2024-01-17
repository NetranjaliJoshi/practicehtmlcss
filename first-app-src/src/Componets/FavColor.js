import React, { Component } from "react";

export class FavColor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: [
        { id: 101, name: "red" },
        { id: 102, name: "green" },
        { id: 103, name: "blue" },
        { id: 104, name: "orange" },
        { id: 105, name: "pink" },
      ],
    };
  }

  render() {
    const { color } = this.state;
    return (
      <div>
        <h2>this is favourite color </h2>
        <ul>
          {color.map((val, index) => {
            return <li key={val.id}>{val.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default FavColor;
