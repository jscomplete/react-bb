const mainReducer = (state, action) => {
  switch (action.type) {
    case 'HIDE_DEAL':
      return {
        ...state,
        deals: state.deals.filter((deal) => deal.key !== action.dealId),
      };
    case 'TICK_TIME':
      return {
        ...state,
        time: new Date(),
      };
    default:
      return state;
  }
};

export default mainReducer;
