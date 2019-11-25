import { QuoteActionTypes } from './quote.types';

const INITIAL_STATE = {
  quote: {
    text: '',
    author: ''
  }
};

const quoteReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case QuoteActionTypes.SET_CURRENT_QUOTE:
      return {
        ...state,
        quote: {
          text: action.payload.text,
          author: action.payload.author
        }
      };
    default:
      return state;
  }
};

export default quoteReducer;