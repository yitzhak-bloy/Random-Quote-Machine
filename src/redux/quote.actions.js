import { QuoteActionTypes } from './quote.types';

export const setCurrentQuote = quote => ({
    type: QuoteActionTypes.SET_CURRENT_QUOTE,
    payload: quote
  });