import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class Summary extends React.Component {
  static propTypes = {
    numberOfDeals: PropTypes.number.isRequired,
  };

  render() {
    return <div>Total number of deals: {this.props.numberOfDeals}</div>;
  }
}

export default connect((state) => ({
  numberOfDeals: state.deals.length,
}))(Summary);
