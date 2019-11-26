import React, { Component } from 'react';
import { connect } from 'react-redux'
import './quote-machine.css';
import QUOTE_DATA from './quote-data';
import  './image/twitter.png';
import { setCurrentQuote } from './redux/quote.actions'


class QuoteMachine extends Component {

  componentDidMount() {
    const rendum = QUOTE_DATA[Math.floor(Math.random()*QUOTE_DATA.length)]
      this.props.setCurrentQuote({
        text: rendum.text,
        author: rendum.author
      })
  }

  handleClick = ()  => {
    const rendum = QUOTE_DATA[Math.floor(Math.random()*QUOTE_DATA.length)]
    this.props.setCurrentQuote({
      text: rendum.text,
      author: rendum.author
    })
  }

  render() {
    const { quote } = this.props;
    return (
      <div id="quote-box" >
        <h2 id="text">{quote.text}</h2>
        <h3 id="author">{quote.author}</h3>
        <div id="buttonAndA" >
          <a id="tweet-quote" className="twitter-share-button" href={`https://twitter.com/intent/tweet?text=${quote.text}--${quote.author}`} >
            <img src="twitter.png" alt="twitter" width='10px' height='10px' />       
          </a>
          <button id="new-quote" onClick={this.handleClick} >
            ציטוט חדש
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
      quote: state.quote
});

const mapDispatchToProps = dispatch => ({
  setCurrentQuote: quote => dispatch(setCurrentQuote(quote))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuoteMachine);