import { createStore, combineReducers, applyMiddleware } from "redux";
import users from "redux/modules/users";
import thunk from "redux-thunk";

//현재 개발(dev) 상태인지 배포(prod) 상태 인지 구분
const env = process.env.NODE_ENV;

//middleware 집합
const middleware = [thunk];

// 개발 중일 때만 import 해서 사용하기 위함
if (env === "development") {
  const { logger } = require("redux-logger");
  middleware.push(logger);
}

// 리듀서들로 이루어진 객체를 취하는 최상위 리듀서
const reducer = combineReducers({
  users
});

// redux store
let store = initialState =>
  createStore(reducer, applyMiddleware(...middleware));

export default store();
