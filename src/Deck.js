import React, { Component } from "react";
import axios from "axios";
import Card from "./Card";
import "./cards.css";

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = { deck: null, drawn: [], cardsLeft: true };
    this.drawCard = this.drawCard.bind(this);
  }

  async componentDidMount() {
    let deck = await axios.get(
      "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    );
    this.setState({ deck: deck.data });
  }

  async drawCard() {
    let { deck_id } = this.state.deck;
    try{

        let response = await axios.get(
          `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`
        );
    
        let card = response.data.cards[0];
        let newCard = {
          id: card.code,
          image: card.image
        };

        this.setState(st => ({
          drawn: [...st.drawn, newCard]
        }));

    } catch(err){
      this.setState({...this.state, cardsLeft: false})
    }
  }

  render() {
    let cards = this.state.drawn.map(c => (
      <Card key={c.id} id={c.id} image={c.image} />
    ));

    return (
     
      <div>
      {this.state.cardsLeft ? (
          <button onClick={this.drawCard}>Draw</button>
      ) : ( null ) } 
        <div className="cards">{cards}</div>
      </div>
    );
  }
}

export default Deck;
