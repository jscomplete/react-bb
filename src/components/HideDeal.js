import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { hideDeal } from '../store/actions';

class HideDeal extends React.Component {
  static propTypes = {
    dealId: PropTypes.string.isRequired,
    hideDeal: PropTypes.func.isRequired,
  };

  handleClick = () => {
    this.props.hideDeal(this.props.dealId);
  };

  render() {
    return <button onClick={this.handleClick}>X</button>;
  }
}

export default connect(null, { hideDeal })(HideDeal);
