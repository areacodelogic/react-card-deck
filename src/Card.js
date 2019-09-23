import React, { Component } from "react";
import "./cards.css";

class Card extends Component {
  render() {
    return (
      <div className="card">
        <img id={this.props.id} src={this.props.image}></img>
      </div>
    );
  }
}

export default Card;
