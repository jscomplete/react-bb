import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { incrementCounter, decrementCounter } from '../store/actions';
// import './App.css';

class App extends Component {
  static propTypes = {
    counter: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    incrementCounter: PropTypes.func.isRequired,
    decrementCounter: PropTypes.func.isRequired,
  };
  render() {
    return (
      <div className="App">
        <h2>{this.props.message}</h2>
        {this.props.counter}
        <div>
          <button onClick={this.props.incrementCounter}>+1</button>
          <button onClick={this.props.decrementCounter}>-1</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter,
  message: state.message,
});

export default connect(mapStateToProps, { incrementCounter, decrementCounter })(
  App
);
