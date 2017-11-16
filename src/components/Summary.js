import React from 'react';
import PropTypes from 'prop-types';
import { connect } from '../my-redux';

export const Summary = ({ numberOfDeals }) => (
  <div>Total number of deals: {numberOfDeals}</div>
);

Summary.propTypes = {
  numberOfDeals: PropTypes.number.isRequired,
};

export default connect((state) => ({
  numberOfDeals: state.deals.length,
}))(Summary);
