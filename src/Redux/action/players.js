const setLoaded = (payload) => ({
  type: "SET_LOADED",
  payload,
});

const setPlayers = (payload) => ({
  type: "SET_PLAYERS",
  payload,
});
export const addPlayers = (payload) => ({
  type: "ADD_PLAYERS",
  payload,
});

export const fetchPlayers = () => {
  return (dispatch) => {
    dispatch(setLoaded(false));
    fetch(`http://localhost:3000/database.json`)
      .then((response) => response.json())
      .then((data) => dispatch(setPlayers(data.players)));
  };
};
