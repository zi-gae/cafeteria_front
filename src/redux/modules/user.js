// import
import axios from "axios";
// actions
const LOGOUT = "LOGOUT";
const SAVE_TOKEN = "SAVE_TOKEN";
// action creator

const saveToken = token => {
  return {
    type: SAVE_TOKEN,
    token
  };
};

const logout = () => {
  return {
    type: LOGOUT
  };
};

// API actions
const usernameLogin = (username, password) => {
  return async dispatch => {
    const res = await axios({
      method: "post",
      url: "/rest-auth/login/",
      headers: {
        "content-Type": "application/json"
      },
      data: {
        username,
        password
      }
    });
    const {
      data: { token }
    } = res;
    try {
      if (token) {
        dispatch(saveToken(token));
      }
    } catch (err) {
      console.log(err);
    }
  };
};

const createAccount = (username, password, stdntnum, nickname, email) => {
  return async dispatch => {
    const res = await axios({
      method: "post",
      url: "/rest-auth/registration/",
      headers: {
        "content-Type": "application/json"
      },
      data: {
        username,
        password1: password,
        password2: password,
        stdntnum,
        name: nickname,
        email
      }
    });
    const {
      data: { token }
    } = res;
    try {
      if (token) {
        dispatch(saveToken(token));
      }
    } catch (err) {
      console.log(err);
    }
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
    case LOGOUT:
      return applyLogout(state, action);
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

const applyLogout = (state, action) => {
  localStorage.removeItem("jwt");
  return {
    isLoggedIn: false
  };
};

// exports
const actionCreators = {
  usernameLogin,
  createAccount,
  logout
};

export { actionCreators };
// reducer export

export default reducer;
