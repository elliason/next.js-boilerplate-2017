// ACTION TYPES
export const counterActionTypes = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT'
};

// ACTION CREATORS
export const incrementCounter = () => dispatch => {
  return dispatch({ type: counterActionTypes.INCREMENT });
};

export const decrementCounter = () => dispatch => {
  return dispatch({ type: counterActionTypes.DECREMENT });
};
