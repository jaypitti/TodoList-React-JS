import React, { Component } from 'react';
import CardForm from './CardForm';
import CardList from './CardList';


class App extends Component {
  state = { cards: [] }

  addCard = (question, answer, flipped) => {
    const { cards } = this.state;
    const card = { question: question, answer: answer, flipped: flipped, id: Math.floor(Math.random() * 101)}
    this.setState({ cards: [card, ...cards] })
  }
  flip = () => {
    const { flipped } = this.state;
    this.setState( state => {
      return {flipped: !flipped}
    });
  }

  handleClick = (id) => {
    const { cards } = this.state;
    this.setState({
      cards: cards.map( card => {
        if (card.id === id) {
          return {
            ... card,
            flipped: !card.flipped
          }
        }
        return card
      })
    })
  }

  render() {
    const { cards } = this.state;
    return (
      <div>
        <CardForm addCard={this.addCard} />
        <CardList handleClick={this.handleClick} cards = { cards } />
      </div>
    );
  }
}

export default App;
