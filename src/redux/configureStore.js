import {
  createStore,
  combineReducers,
  applyMiddleware /*compose*/
} from "redux";
import { createBrowserHistory } from "history";
import { connectRouter, routerMiddleware } from "connected-react-router";
import user from "redux/modules/user";
import posts from "redux/modules/posts";
import crawlers from "redux/modules/crawlers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { i18nState } from "redux-i18n";

//현재 개발(dev) 상태인지 배포(prod) 상태 인지 구분
const env = process.env.NODE_ENV;

const history = createBrowserHistory();
//middleware 집합
const middleware = [thunk, routerMiddleware(history)];

// 개발 중일 때만 import 해서 사용하기 위함
if (env === "development") {
  const { logger } = require("redux-logger");
  middleware.push(logger);
}

// 리듀서들로 이루어진 객체를 취하는 최상위 리듀서
const reducer = combineReducers({
  user,
  posts,
  crawlers,
  router: connectRouter(history),
  i18nState: i18nState
});

let store;

if (env === "development") {
  store = initialState =>
    // createStore(reducer,compose(applyMiddleware(...middleware), Reactotron.createEnhancer()));
    createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)));
} else {
  // redux store
  store = initialState => createStore(reducer, applyMiddleware(...middleware));
}

export { history };
export default store();
