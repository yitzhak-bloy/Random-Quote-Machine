import React, { Component } from 'react';
import QUOTE_DATA from './quote-data';

class QuoteMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: QUOTE_DATA,
      QuoteText: "",
      QuoteAuthor: ""
    };
  }

  componentDidMount() {
    const rendum = this.state.collections[Math.floor(Math.random()*10)]
    this.setState({
      collections: QUOTE_DATA,
      QuoteText: rendum.text,
      QuoteAuthor: rendum.author
    })
  }

  render() {
    return (
      <div>
        <div id="quote-box">
          <h2 id="text">{this.state.QuoteText}</h2>
          <h3 id="author">{this.state.QuoteAuthor}</h3>
          <button id="new-quote">
            !ציטוט חדש
          </button>
          <a id="tweet-quote" href='"twitter.com/intent/tweet"'>
          twitter
          </a>
        </div>
      </div>
    )
  }
}

export default QuoteMachine;