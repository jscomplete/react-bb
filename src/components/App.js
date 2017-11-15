import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// import { incrementCounter, decrementCounter } from '../store/actions';
// import './App.css';

import Summary from './Summary';
import HideDeal from './HideDeal';

class App extends Component {
  static propTypes = {
    deals: PropTypes.array.isRequired,
  };
  render() {
    return (
      <div className="App">
        {this.props.deals.map((deal) =>
          <div key={deal.key}>
            {deal.title}
            <HideDeal dealId={deal.key} />
          </div>
        )}
        <Summary />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  deals: state.deals,
});

export default connect(mapStateToProps, {})(App);
