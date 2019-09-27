# sass, css module & camelCase 적용

## css module 이란?

    classname 을 임의로 중복 되지 않게 지어준다.
    css 를 import 했을때 classname 이 중복 되지 않게
    주의 했어야 하는데 신경 쓰지 않아도 된다.

## camelCase

    css classname 에 camel case 적용 가능

```javascript
{
  test: sassRegex,
  exclude: sassModuleRegex,
  use: getStyleLoaders(
    {
      importLoaders: 2,
      sourceMap: isEnvProduction && shouldUseSourceMap,
      camelCase: true //해당 라인 추가
    },
    "sass-loader"
  )
  sideEffects: true
},
```

use 에 camelCase: true 를 추가 해주면 된다

> scss 부분이지만 css 도 마찬가지다.

## scss defualt import

```javascript
use: getStyleLoaders({
  importLoaders: 2,
  sourceMap: isEnvProduction && shouldUseSourceMap,
  camelCase: true
}).concat({
  loader: require.resolve("sass-loader"),
  options: {
    data: `@import "../src/_variableColors.scss";`
  }
});
```

getStylesLoaders 에서 두번째 파라미터로는 문자열형태로밖에 받아오지 못하니 concat 으로 붙여준다.

> paths.appSrc 를 이용하면 파일이 어디에 있던 src 경로에서 시작 할 수 있다

# Connnect React to Django

## React Proxy Setting

django 에서 만든 api 를 react 에서 호출하기 위해서는 react 에서 proxy 설정을 해주어야 한다. django 는 :8000 번에 위치하고 react 는 :3000 번에 위치하기 때문이다.
예로

```
localhost:3000/users/chagepassword
```

라는 url 이 있으면 react 는 :3000번 이기 때문에 해당 url 을 찾지 못한다. 하지만 이때 proxy 를 :8000 으로 설정을 해두면 우선적으로 localhost:3000/users/chagepassword 을 찾고 없으면 localhost:8000/users/chagepassword 에서 찾는다.

package.json

```javascript
{
  ...,
  "proxy": "http://localhost:8000",
  ...
}
```

위와 같이 설정

# history

> yarn add history

history 는 object 인데, 어플리케이션 안에 어떤 내비게이션 스텝을 밟았는지 정보를 가지고 있어, 뒤로가기 등이 가능하다. window.history 와 비슷하다.

# react-router-redux & connected-react-router

## react-router-redux

react-router-redux 를 이용해 리듀서에 router 를 추가 시키려고 하였으나 도대체가 되질 않아 찾아보니 `react-router-redux@next` 를 받으면 해결 된다 하여 기존 `react-router-redux` 삭제 후 다시 설치 하였으나 해결 되지 않는다. 한참의 삽질 후 다시 공식 문서를 들여다 보았는데 <b>Project Deprecated<b> 제일 위에 떡하니 써져있는걸 못보고 manual 부터 보았다..

## connected-react-router

> 자세한 사방법은 [참조](https://github.com/supasate/connected-react-router)

> yarn add connected-react-router

`react-router-redux` 상단에 `connected-react-router` 를 이용하라고 되어있다.

## 사용법

방법 1

__최상위 리듀서안에__
- `history` object 를 만든다.
- `history` 인수를 사용하고 `root reducer`를 반환 하는 함수를 만든다.
- `connectRouter` 에 `history` 를 담아서 `root reducer` 에 `router` 를 추가,
- \*키는 `router` 여야 한다.

```javascript
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  ... // rest of your reducers
})
export default createRootReducer
```

방법 2

__리덕스 스토어에 만들때__
- `history` object 를 만든다.
- `history` object 를 루트 리듀서에게 전달
- `history action` 을 `dispatch` 하고 싶다면 `routerMiddleware(history)` 를 사용 할 수 있다. ((e.g. to change URL with push('/path/to/somewhere')))

```javascript
// configureStore.js
...
import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from './reducers'
...
export const history = createBrowserHistory()

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    compose(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        // ... other middlewares ...
      ),
    ),
  )

  return store
}
```

마지막 단계

- `history` 를 `ConnectedRouter` 에 전달한다.
- `ConnectedRouter` 위치는 `react-redux's` `Provider` 의 자식(아래)에 둔다.

```jsx
//index.js
...
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router' // react-router v4/v5
import { ConnectedRouter } from 'connected-react-router'
import configureStore, { history } from './configureStore'
...
const store = configureStore(/* provide initial state if any */)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}> { /* place ConnectedRouter under Provider */ }
      <> { /* your usual react-router v4/v5 routing */ }
        <Switch>
          <Route exact path="/" render={() => (<div>Match</div>)} />
          <Route render={() => (<div>Miss</div>)} />
        </Switch>
      </>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('react-root')
)
```
# react-redux develop tools

## Reactotron

> brew cask install reactotron

> yarn add reactotron-react-js

> 자세한 사용법 [참조](https://github.com/infinitered/reactotron/blob/master/docs/quick-start-react-js.md)

console.log 대신 이용할 유용한 디버그 툴이다.
`src/ReactotronConfig.js` 를 추가한다.

```javascript
import Reactotron from "reactotron-react-js";

Reactotron.configure() // we can use plugins here -- more on this later
  .connect(); // let's connect!
```

`ReactotronConfig` 파일에 `reactotron-redux` 를 추가하고 아래와 같이 수정

```diff
// ReactotronConfig.js
+ import { reactotronRedux } from 'reactotron-redux'


// then add it to the plugin list
- Reactotron
+ const reactotron = Reactotron
  .configure({ name: 'React Native Demo' })
+ .use(reactotronRedux()) //  <- here i am!
  .connect() //Don't forget about me!

+ export default reactotron
```

## react-dev-tools
`store` 를 생성할때, `composeWithDevTools` 로 감싸준다.

아래 참고
```javascript
let store = createStore(reducer, composeWithDevTools(...middleware));
```

# redux-i18n

__i18n 이란?__
- Internationalization. i 와 n 사이에 18 글자의 단어가 있어서 i18n 이라고 불린다.
- 다국어 시스템을 구현하는 환경을 구성할때 쓰인다.

> 자세한 사용법은 [참조](https://www.npmjs.com/package/redux-i18n)

> yarn add redux-i18n

## Usage

```javascript
// import ... 
import I18n from "redux-i18n"

import {translations} from "./translations"

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <I18n translations={translations}>
          <App />
        </I18n>
      </Provider>
    )
  }
}
```
위에서 `translations` 은 아래와 같은 구조이다.

```javascript
export const translations = {
  "es": {
    "Translate this text": "Traduce este texto",
    "Hello {n}!": "Hola {n}!",
  }
}
```

`initialLang` prop 을 통해 초기언어 설정도 가능하다.

```javascript
<I18n translations={translations} initialLang="es">
  <div>
    <h1>My Project</h1>
    {this.props.children}
  </div>
</I18n>
```

`fallbackLang` prop 을 통해 번역하지 않을 리터럴을 다른 언어로 표시 가능하다.

```javascript
<I18n translations={translations} initialLang="de" fallbackLang="en">
  <div>
    <h1>My Project</h1>
    {this.props.children}
  </div>
</I18n>
```

In this case, if you want to show this translations:

```html
<div>{this.context.t('_hello_')}</div>
```

And this isn't in "de" language, it will show in "en".

## Redux Reducer

The language state is managed in a slice of the store named `i18nState`. Therefore, you have to add the **i18nState** reducer in your `combineReducers`.

```javascript
import {otherreducers} from "./Yourproject"

import {i18nState} from "redux-i18n"

const appReducer = combineReducers({
  otherreducers,
  i18nState
})
```

The current language is contained in the `lang` key of `i18nState`.

The `i18nState` is initially defined as

```javascript
const defaultI18nState = {
  lang: 'en',
  translations: {},
  forceRefresh: false
}
```
`translations` object allows to set an options node. There you can set a plurals form rule and a plurals number. For example:

```javascript
export const translations = {
  "es": {
    "Translate this text": "Traduce este texto",
    "Hello {n}!": "Hola {n}!",
  },
  "options": {
    "plural_rule": "n > 1",
    "plural_number": "2",
  }
}
```

## Change language

Use the `setLanguage` action.

```javascript
import {setLanguage} from "redux-i18n"

componentWillMount() {
  this.props.dispatch(setLanguage("es"))
}
```

`translations` 객체가 가지고 있는 언어일 경우만 가능하다.

```javascript
export const translations = {
  "es": {
    ...
  },
  "en": {
    ...
  }
}
```

# SASS mixin

__mixin 이란?__
- scss 에서 반복작업을 쉽게 할 수 있음
- condition 에 따른 결과를 다르게 할 수 있음.

## Usage

`@content`
Mixin에 @content이 이 포함 되있으면 `스타일` 부분을 return 할 수 있다.

위와 같은 방법으로 기존 scss 에 속성을 추가 할 수 있다.
```
@mixin 믹스인이름() {
  스타일;
  @content;
}

@include 믹스인이름() {
  // 스타일 블록
  스타일;
}
```










