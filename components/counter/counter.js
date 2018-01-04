import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from 'components/counter/counter.actions';

/* Redux bindings */
const mapStateToProps = (state) => {
  return {
    counterCount: state.counter.count
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    incrementCounter: bindActionCreators(incrementCounter, dispatch),
    decrementCounter: bindActionCreators(decrementCounter, dispatch)
  };
};

@connect(mapStateToProps, mapDispatchToProps)
class Counter extends Component {
  render() {
    const { counterCount, incrementCounter, decrementCounter } = this.props;

    return (
      <div className="counter">
        <p>{ counterCount }</p>
        <button onClick={incrementCounter}>Increment</button>
        <button onClick={decrementCounter}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
