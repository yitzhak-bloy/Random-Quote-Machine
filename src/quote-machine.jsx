import React, { Component } from 'react';
import { connect } from 'react-redux'
import './quote-machine.css';
import QUOTE_DATA from './quote-data';
import  './image/twitter.png';


class QuoteMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: QUOTE_DATA,

    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const rendum = this.state.collections[Math.floor(Math.random()*this.state.collections.length)]
    this.setState({
      quote: {
        text: rendum.text,
        author: rendum.author
      }
    })
  }

  handleClick() {
    const rendum = this.state.collections[Math.floor(Math.random()*this.state.collections.length)]
    this.setState({
      quote: {
        text: rendum.text,
        author: rendum.author
      }
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

export default connect(mapStateToProps)(QuoteMachine);