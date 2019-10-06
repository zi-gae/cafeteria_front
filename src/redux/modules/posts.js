// imports
import axios from "axios";
import { actionCreators as userActions } from "redux/modules/user";

//  actions

const SET_FEED = "SET_FEED";
const LIKE_POST = "LIKE_POST";
const UNLIKE_POST = "UNLIKE_POST";

// action creatorsa

const setFeed = feed => {
  return {
    type: SET_FEED,
    feed: feed
  };
};

const likePost = postId => {
  return {
    type: LIKE_POST,
    postId
  };
};

const unLikePost = postId => {
  return {
    type: UNLIKE_POST,
    postId
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

const setLikePost = postId => {
  return async (dispatch, getState) => {
    dispatch(likePost(postId));
    const {
      user: { token }
    } = getState();
    const res = await axios({
      url: `/posts/${postId}/like/`,
      method: "post",
      headers: {
        Authorization: `JWT ${token}`
      }
    });
    console.log("setlike res: ", res);

    if (res.status === 401) {
      dispatch(userActions.logout());
    } else if (res.status === 304) {
      dispatch(unLikePost(postId));
    }
  };
};

const setUnLikePost = postId => {
  return async (dispatch, getState) => {
    dispatch(unLikePost(postId));
    const {
      user: { token }
    } = getState();
    const res = await axios({
      url: `/posts/${postId}/unlike/`,
      method: "delete",
      headers: {
        Authorization: `JWT ${token}`
      }
    });
    console.log("setunlike res: ", res);

    if (res.status === 401) {
      dispatch(userActions.logout());
    } else if (res.status === 304) {
      dispatch(likePost(postId));
    }
  };
};

// initial state

const initialState = {};

// reducer

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FEED:
      return applySetFeed(state, action);
    case LIKE_POST:
      return applyLikePost(state, action);
    case UNLIKE_POST:
      return applyUnLikePost(state, action);
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

const applyLikePost = (state, action) => {
  const { postId } = action;
  const { feed } = state;
  console.log("like: ", postId);

  const updateFeed = feed.map(post => {
    if (post.id === postId) {
      return {
        ...post,
        is_liked: true,
        like_count: post.like_count + 1
      };
    } else {
      return post;
    }
  });
  return { ...state, feed: updateFeed };
};
const applyUnLikePost = (state, action) => {
  const { postId } = action;
  const { feed } = state;
  console.log("unlike: ", postId);

  const updateFeed = feed.map(post => {
    if (post.id === postId) {
      return {
        ...post,
        is_liked: false,
        like_count: post.like_count - 1
      };
    } else {
      return post;
    }
  });
  return { ...state, feed: updateFeed };
};
// exports

const actionCreators = {
  getFeed,
  setLikePost,
  setUnLikePost
};

export { actionCreators };

// default reducer export

export default reducer;
