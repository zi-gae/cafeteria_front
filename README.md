# sass, css module & camelCase 적용

## css module 이란?
    classname 을 임의로 중복 되지 않게 지어준다.
    css 를 import 했을때 classname 이 중복 되지 않게
    주의 했어야 하는데 신경 쓰지 않아도 된다.

## cameCase
    css classname 에 camel case 적용 가능

```
{
  test: sassRegex,
  exclude: sassModuleRegex,
  use: getStyleLoaders(
    {
      importLoaders: 2,
      sourceMap: isEnvProduction && shouldUseSourceMap,
      camelCase: true
    },
    "sass-loader"
  )
  sideEffects: true
},
```

use 에 camelCase: true 를 추가 해주면 된다
> scss 부분이지만 css 도 마찬가지다.

## scss defualt import
```
use: getStyleLoaders(
    {
      importLoaders: 2,
      sourceMap: isEnvProduction && shouldUseSourceMap,
      camelCase: true
    }
  ).concat({
    loader: require.resolve("sass-loader"),
    options: {
      data: `@import "../src/_variableColors.scss";`
    }
  })
```
getStylesLoaders 에서 두번째 파라미터로는 문자열형태로밖에 받아오지 못하니 concat 으로 붙여준다.
> paths.appSrc 를 이용하면 파일이 어디에 있던 src 경로에서 시작 할 수 있다


