// imports

import { actionCreators as userActions } from "redux/modules/user";

//  actions

const SET_FEED = "SET_FEED";

// action creators

// api actions

const getFeed = () => {
  return (dispatch, getState) => {
    const {
      user: { token }
    } = getState();
    fetch("/images/", {
      headers: {
        Authorization: `JWT ${token}`
      }
    })
      .then(res => {
        if (res.status === 401) {
          dispatch(userActions.logout());
        }
        return res.json();
      })
      .then(json => console.log(json))
      .catch(err => console.log("Err: ", err));
  };
};

// initial state

const initialState = {};

// reducer

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// reducer func

// exports

const actionCreators = {
  getFeed
};

export { actionCreators };

// default reducer export

export default reducer;
