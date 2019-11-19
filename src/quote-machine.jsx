import React, { Component } from 'react';

class QuoteMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Quote: ''
    };
  }

  render() {
    return (
      <div>
        <div id="quote-box">
          <h2 id="text">הצלחה היא היכולת לעבור מכישלון לכישלון מבלי לאבד את ההתלהבות</h2>
          <h3 id="author">וינסטון צ'רצ'יל</h3>
          <button id="new-quote">ציטוט חדש</button>
          <a id="tweet-quote" href='"twitter.com/intent/tweet"'>
          twitter
          </a>
        </div>
      </div>
    )
  }
}

export default QuoteMachine;