import React, { Component } from 'react';
import './quote-machine.css';
import QUOTE_DATA from './quote-data';

class QuoteMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: QUOTE_DATA,
      QuoteText: "",
      QuoteAuthor: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const rendum = this.state.collections[Math.floor(Math.random()*10)]
    this.setState({
      QuoteText: rendum.text,
      QuoteAuthor: rendum.author
    })
  }

  handleClick() {
    const rendum = this.state.collections[Math.floor(Math.random()*10)]
    this.setState({
      QuoteText: rendum.text,
      QuoteAuthor: rendum.author
    })
  }
  render() {
    const { QuoteText, QuoteAuthor } = this.state;
    return (
        <div id="quote-box"  >
          <h2 id="text">{QuoteText}</h2>
          <h3 id="author">{QuoteAuthor}</h3>
          <div id="buttonAndA" >
            <a id="tweet-quote" className="twitter-share-button" href={`https://twitter.com/intent/tweet?text=${QuoteText}--${QuoteAuthor}`}>
              Tweet
            </a>
            <button id="new-quote" onClick={this.handleClick} >
              ציטוט חדש
            </button>
          </div>
        </div>
    )
  }
}

export default QuoteMachine;