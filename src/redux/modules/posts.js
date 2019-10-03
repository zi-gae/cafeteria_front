// imports
// import axios from "axios";
import { actionCreators as userActions } from "redux/modules/user";

//  actions

const SET_FEED = "SET_FEED";

// action creators

const setFeed = feed => {
  return {
    type: SET_FEED,
    feed: feed
  };
};
// api actions

const getFeed = () => {
  return (dispatch, getState) => {
    const {
      user: { token }
    } = getState();

    fetch("/posts/", {
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
      .then(json => dispatch(setFeed(json)))
      .catch(err => console.log("Err: ", err));
  };
};

// initial state

const initialState = {};

// reducer

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FEED:
      return applySetFeed(state, action);
    default:
      return state;
  }
};

// reducer func

const applySetFeed = (state, action) => {
  const { feed } = action;
  return {
    ...state,
    feed
  };
};

// exports

const actionCreators = {
  getFeed
};

export { actionCreators };

// default reducer export

export default reducer;
