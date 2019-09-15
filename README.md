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
