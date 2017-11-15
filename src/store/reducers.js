const mainReducer = (state, action) => {
  switch (action.type) {
    case 'HIDE_DEAL':
      return {
        ...state,
        deals: state.deals.filter((deal) =>
          deal.key !== action.dealId
        ),
      };
    default:
      return state;
  }
};

export default mainReducer;
