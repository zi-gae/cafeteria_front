// import

// actions
const SAVE_TOKEN = "SAVE_TOKEN";
// action creator

const saveToken = token => {
  return {
    type: SAVE_TOKEN,
    token
  };
};

// API actions
const usernameLogin = (username, password) => {
  return dispatch => {
    fetch("/rest-auth/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password
      })
    })
      .then(res => res.json())
      .then(json => {
        if (json.token) {
          dispatch(saveToken(json.token));
        }
      })
      .catch(err => console.log(err));
  };
};

const createAccount = (stdntNumber, username, nickname, password) => {
  return dispatch => {
    fetch("/rest-auth/registration/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        stdntNumber,
        username,
        nickname,
        password1: password,
        password2: password
      })
    })
      .then(res => res.json())
      .then(json => {
        if (json.token) {
          dispatch(saveToken(json.token));
        }
      })
      .catch(err => console.log(err));
  };
};

//initial statment
const initialState = {
  isLoggedIn: localStorage.getItem("jwt") ? true : false,
  token: localStorage.getItem("jwt")
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_TOKEN:
      return applySetToken(state, action);
    default:
      return state;
  }
};

// reducer functions
const applySetToken = (state, action) => {
  const { token } = action;
  localStorage.setItem("jwt", token);
  return {
    ...state,
    isLoggedIn: true,
    token: token
  };
};

// exports
const actionCreators = {
  usernameLogin,
  createAccount
};

export { actionCreators };
// reducer export

export default reducer;
