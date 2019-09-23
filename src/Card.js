import React, { Component } from "react";
import "./cards.css";

class Card extends Component {
  render() {

    // will turn every card -> everytime because these random values are generated everytime the page renders
    //fix will be using some type of state when drawing a card and setting these values at that point in time, then sending them in as props to this Card component
    let degree = Math.floor(Math.random() * 90) - 45;
    let scootVert = Math.floor(Math.random() * 20);
    let scootHorz = Math.floor(Math.random() * 20);
    return (
      <div className="card">
        <img id={this.props.id} src={this.props.image}
        style={ {transform: `rotate(${degree}deg) translate(${scootHorz}px,${scootVert}px)`}}
        alt={this.props.id}></img>
      </div>
    );
  }
}

export default Card;
