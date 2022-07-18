const setLoaded = (payload) => ({
  type: "SET_LOADED",
  payload,
});

const setTeams = (payload) => ({
  type: "SET_TEAMS",
  payload,
});
export const addTeams = (payload) => ({
  type: "ADD_TEAM",
  payload,
});

export const fetchTeams = () => {
  return (dispatch) => {
    dispatch(setLoaded(false));
    fetch(`http://localhost:3000/database.json`)
      .then((response) => response.json())
      .then((data) => dispatch(setTeams(data.teams)));
  };
};
