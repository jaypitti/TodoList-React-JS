import React from 'react';

class CardForm extends React.Component {
  state = { question: '', answer: '', flipped: false}


  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addCard(this.state.question,
                        this.state.answer,
                        this.state.flipped: false)
    this.setState({ question: '',answer: '' })
  }

  handleQuestionChange = (e) => {
    this.setState({ question: e.target.value})
  }
  handleAnswerChange = (e) => {
    this.setState({ answer: e.target.value})
  }

  render() {
    const { question, answer, flipped } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.question}
          onChange={this.handleQuestionChange}
          required
          placeholder="Question"
        />
        <input
          value={this.state.answer}
          onChange={this.handleAnswerChange}
          required
          placeholder="Answer"
        />
        <button type="submit">Add Card</button>
      </form>
    )
  }
}

export default CardForm;
