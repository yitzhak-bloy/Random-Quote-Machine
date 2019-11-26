import { createStore } from 'redux';
import quoteReducer from './quote.reducer';

const store = createStore(quoteReducer);

export default store;