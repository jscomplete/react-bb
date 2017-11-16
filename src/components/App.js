// Context API
// HOC

import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { connect } from '../my-redux';

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

export default class extends React.Component {
  static displayName = 'Connect(App)';

  static contextTypes = {
    store: PropTypes.object.isRequired,
  };

  render() {
    const propsMap = mapStateToProps(this.context.store.getState());

    return <App {...propsMap} />;
  }
}

// export default connect(mapStateToProps, {})(App);
