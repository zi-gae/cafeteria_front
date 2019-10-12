// imports
import axios from "axios";
import { actionCreators as userActions } from "redux/modules/user";

//  actions

const SET_FEED = "SET_FEED";
const LIKE_POST = "LIKE_POST";
const UNLIKE_POST = "UNLIKE_POST";
const ADD_COMMENT = "ADD_COMENT";
const SET_POST_LIST = "SET_POST_LIST";
const ADD_POST = "ADD_POST";
const UPDATE_POST = "UPDATE_POST";
const DELETE_POST = "DELETE_POST";
const POST_ONCOMMENT = "POST_ONCOMMENT";
const DELETE_COMMENT = "DELETE_COMMENT";
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

const addComment = (postId, comment) => {
  return {
    type: ADD_COMMENT,
    postId,
    comment
  };
};

const setPostList = postList => {
  return {
    type: SET_POST_LIST,
    postList
  };
};

const addPost = post => {
  return {
    type: ADD_POST,
    post
  };
};

const updatePost = (postId, comment) => {
  return {
    type: UPDATE_POST,
    postId,
    comment
  };
};

const requestDeletePost = postId => {
  return {
    type: DELETE_POST,
    postId
  };
};

const requestOnComment = (postId, comment) => {
  return {
    type: POST_ONCOMMENT,
    comment,
    postId
  };
};

const requestDeleteComment = (postId, commentId) => {
  return {
    type: DELETE_COMMENT,
    postId,
    commentId
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

    if (res.status === 401) {
      dispatch(userActions.logout());
    } else if (res.status === 304) {
      dispatch(likePost(postId));
    }
  };
};

const commentPost = (postId, message) => {
  return async (dispatch, getState) => {
    const {
      user: { token }
    } = getState();
    const res = await axios({
      url: `/posts/${postId}/comments/`,
      method: "post",
      headers: {
        Authorization: `JWT ${token}`,
        "Content-Type": "application/json"
      },
      data: {
        message
      }
    });

    if (res.status === 401) {
      dispatch(userActions.logout());
    }
    const { data } = res;
    if (data.message) {
      dispatch(addComment(postId, data));
    }
  };
};

const searchByTerm = searchTerm => {
  return async (dispatch, getState) => {
    const {
      user: { token }
    } = getState();
    const postList = await searchPosts(token, searchTerm);
    if (postList === 401) {
      dispatch(userActions.logout());
    }
    dispatch(setPostList(postList));
  };
};

const searchPosts = (token, searchTerm) => {
  return axios({
    url: `/posts/title_search/?title=${searchTerm}`,
    method: "get",
    headers: {
      Authorization: `JWT ${token}`
    }
  }).then(res => res.data);
};

const createPost = (title, content, file, anonymous) => {
  let formData = new FormData();
  formData.append("title", title);
  formData.append("content", content);
  formData.append("anonymous", anonymous);
  if (file !== null && typeof file === "object") {
    formData.append("file", file, file.name);
  }
  return async (dispatch, getState) => {
    const {
      user: { token }
    } = getState();
    await axios({
      url: `/posts/`,
      method: "post",
      headers: {
        Authorization: `JWT ${token}`,
        "Content-type": "multipart/form-data"
      },
      data: formData
    }).then(res => {
      if (res.status === 401) {
        dispatch(userActions.logout());
      } else {
        dispatch(addPost(res.data));
      }
    });
  };
};

const putPost = (postId, title, content, file, anonymous) => {
  let formData = new FormData();
  formData.append("title", title);
  formData.append("content", content);
  formData.append("anonymous", anonymous);

  if (typeof file === "object") {
    formData.append("file", file, file.name);
  }
  return async (dispatch, getState) => {
    const {
      user: { token }
    } = getState();
    await axios({
      url: `/posts/${postId}/`,
      method: "put",
      headers: {
        Authorization: `JWT ${token}`,
        "Content-type": "multipart/form-data"
      },
      data: formData
    }).then(res => {
      if (res.status === 401) {
        dispatch(userActions.logout());
      } else {
        dispatch(updatePost(postId, res.data));
      }
    });
  };
};

const deletePost = postId => {
  return (dispatch, getState) => {
    const {
      user: { token }
    } = getState();
    const res = axios({
      url: `/posts/${postId}/`,
      method: "delete",
      headers: {
        Authorization: `JWT ${token}`
      }
    });
    if (res.status === 401) {
      dispatch(userActions.logout());
    } else {
      dispatch(requestDeletePost(postId));
    }
  };
};

const putCommentOnComment = (postId, commentId, message) => {
  let formData = new FormData();
  formData.append("referComment", commentId);
  formData.append("message", message);
  return async (dispatch, getState) => {
    const {
      user: { token }
    } = getState();
    await axios({
      url: `/posts/${postId}/${commentId}/comments/`,
      method: "post",
      headers: {
        Authorization: `JWT ${token}`,
        "Content-type": "multipart/form-data"
      },
      data: formData
    }).then(res => {
      if (res.status === 401) {
        dispatch(userActions.logout());
      } else {
        dispatch(requestOnComment(postId, res.data));
      }
    });
  };
};

const deleteComment = (postId, commentId) => {
  return async (dispatch, getState) => {
    const {
      user: { token }
    } = getState();

    await axios({
      url: `/posts/comments/${commentId}/`,
      method: "delete",
      headers: {
        Authorization: `JWT ${token}`
      }
    }).then(res => {
      if (res.status == 400) {
        dispatch(userActions.logout());
      } else {
        dispatch(requestDeleteComment(postId, commentId));
      }
    });
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
    case ADD_COMMENT:
      return applyAddComment(state, action);
    case SET_POST_LIST:
      return applySetPostList(state, action);
    case ADD_POST:
      return applyAddPost(state, action);
    case UPDATE_POST:
      return applyUpdatePost(state, action);
    case DELETE_POST:
      return applyDeletePost(state, action);
    case POST_ONCOMMENT:
      return applyCommentOnComment(state, action);
    case DELETE_COMMENT:
      return applyDeleteComment(state, action);
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

const applyAddComment = (state, action) => {
  const { postId, comment } = action;
  const { feed } = state;

  const updateFeed = feed.map(post => {
    if (post.id === postId) {
      return {
        ...post,
        comments: [...post.comments, comment]
      };
    } else {
      return post;
    }
  });
  return { ...state, feed: updateFeed };
};

const applySetPostList = (state, action) => {
  const { postList } = action;
  return {
    ...state,
    postList
  };
};

const applyAddPost = (state, action) => {
  const { feed } = state;
  const { post } = action;
  return {
    feed: [post, ...feed]
  };
};

const applyUpdatePost = (state, action) => {
  const { feed } = state;
  const { postId } = action;
  const updateFeed = feed.map(post => {
    if (post.id === postId) {
      return {
        ...post,
        ...action.post
      };
    } else {
      return post;
    }
  });

  return { ...state, feed: updateFeed };
};

const applyDeletePost = (state, action) => {
  const { feed } = state;
  const { postId } = action;

  const updateFeed = feed.filter(post => post.id !== postId);

  return { ...state, feed: updateFeed };
};

const applyCommentOnComment = (state, action) => {
  const { postId, comment } = action;
  const { feed } = state;

  const updateFeed = feed.map(post => {
    if (post.id === postId) {
      return {
        ...post,
        comments: [...post.comments, comment]
      };
    } else {
      return post;
    }
  });
  return { ...state, feed: updateFeed };
};

const applyDeleteComment = (state, action) => {
  const { feed } = state;
  const { postId, commentId } = action;

  const updateFeed = feed.map(post => {
    if (post.id === postId) {
      return {
        ...post,
        comments: post.comments.filter(comment => commentId !== comment.id)
      };
    } else {
      return post;
    }
  });

  return {
    ...state,
    feed: updateFeed
  };
};
// exports

const actionCreators = {
  getFeed,
  setLikePost,
  setUnLikePost,
  commentPost,
  searchByTerm,
  createPost,
  putPost,
  deletePost,
  putCommentOnComment,
  deleteComment
};

export { actionCreators };

// default reducer export

export default reducer;
