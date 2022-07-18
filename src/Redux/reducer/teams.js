const initialState = {
  items: [],
};

const teams = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TEAMS":
      return {
        ...state,
        items: action.payload,
      };
    case "ADD_TEAM":
      return {
        ...state, 
        items: [...state.items, action.payload],
      };
    default:
      return state;
  }
};

export default teams;
