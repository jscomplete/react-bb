import React from 'react';
import PropTypes from 'prop-types';

export class Provider extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    children: PropTypes.object.isRequired,
  };
  static childContextTypes = {
    store: PropTypes.object.isRequired,
  };
  getChildContext() {
    return { store: this.props.store };
  }
  render() {
    return this.props.children;
  }
}

export const connect = (
  mapStateToProps,
  mapDispatchToProps
) => (WrappedComponent) => {
  const _mapStateToProps = mapStateToProps ? mapStateToProps : () => ({});
  const _mapDispatchToProps = mapDispatchToProps ? mapDispatchToProps : {};

  return class extends React.Component {
    static displayName = `Connect(${WrappedComponent.name})`;

    static contextTypes = {
      store: PropTypes.object.isRequired,
    };

    constructor(props) {
      super(props);
      this.actionsMap = {};
      Object.entries(_mapDispatchToProps).forEach(
        ([actionName, actionFunction]) => {
          this.actionsMap[actionName] = (...args) =>
            this.context.store.dispatch(actionFunction.apply(this, args));
        }
      );
    }

    componentDidMount() {
      this.unsubscribe = this.context.store.subscribe(this.onStoreChange);
    }

    componentWillUnmount() {
      this.unsubscribe();
    }

    onStoreChange = () => {
      this.forceUpdate(); // TODO: optimize
    };

    render() {
      const propsMap = _mapStateToProps(this.context.store.getState());

      return <WrappedComponent {...this.props} {...propsMap} {...this.actionsMap} />;
    }
  };
};
