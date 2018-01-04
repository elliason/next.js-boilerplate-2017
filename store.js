import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import { counter } from 'components/counter/counter.reducer';
import { language } from 'components/languageSwitch/languageSwitch.reducer';

const rootReducer = combineReducers({
  counter,
  language
});

export const initStore = (initialState = initialState) => {
  return createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
};
