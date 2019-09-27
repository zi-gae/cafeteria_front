// import

// actions

// action creator

//initial statment
const initialState = {
  isLoggedIn: localStorage.getItem("jwt") || false
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// reducer functions

// exports

// reducer export

export default reducer;
