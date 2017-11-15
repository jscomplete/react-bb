import React, { Component } from 'react';
import { connect } from 'react-redux';

import { incrementCounter, decrementCounter } from '../store/actions';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
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
});

export default connect(mapStateToProps, { incrementCounter, decrementCounter })(
  App
);
