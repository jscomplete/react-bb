import React from 'react';
import PropTypes from 'prop-types';
import { connect } from '../my-redux';

import { hideDeal } from '../store/actions';

class HideDeal extends React.Component {
  static propTypes = {
    dealId: PropTypes.string.isRequired,
    hideDeal: PropTypes.func.isRequired,
  };

  handleClick = () => {
    this.props.hideDeal(this.props.dealId);
    // store.dispatch(hideDeal(this.props.dealId));
  };

  render() {
    return <button onClick={this.handleClick}>X</button>;
  }
}

export default connect(null, { hideDeal })(HideDeal);
