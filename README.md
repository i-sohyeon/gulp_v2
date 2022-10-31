# gulp plugin 설치

## $ npm install gulp-cli -g
* 전역 NPM Package에 Gulp를 설치해주어야함(콘솔에서 gulp를 사용하기 때문)

## mkdir gulp -> cd gulp
* gulp라는 폴더 생성 후 해당 폴더로 진입

## gulp 폴더 내에 src 생성
* src폴더 : 컴파일 되길 원하는 모든 파일이 들어가는 폴더
* src폴더 구조
~~~
-src
  -img
  -js
  -partials
  -scss
  -templates
.babelrc
gulpfile.babel.js
package-lock.json
package.json
README.md
~~~

## $ npm init
* package.json을 만드는 명령어. 새로운 프로젝트나 패키지를 만들 때 사용
~~~
gulp를 사용하기 위해서는 gulpfile 작성이 필요함
package.json파일 안에 하단 서식 작성 필요
~~~

## $ npm add gulp -D
* 개발용이기 때문에 -D를 붙여줌
* gulp를 설치함으로써 gulp를 package.json에서 사용할수 있게 만들어줌.

## [gulpfile.js]의 파일명을 [gulpfile.babel.js]로 변경
* gulp를 babel을 이용해서 컴파일

## [.babelrc]파일 생성
~~~
{
  "presets": ["@babel/preset-env"]
}
~~~

* 후에 gulp dev를 실행하면 에러가 발생
~~~
  $ npm install --save-dev @babel/register
  $ npm install --save-dev @babel/core
  $ npm install --save-dev @babel/preset-env
~~~
* Task never defined : dev 오류 발생
* gulp dev 실행


## Task 만들기
* 모든 pug 파일을 HTML로 바꾸는 task 만들기 -> 라이브러리 사용
* src를 이용해서 gulp는 일종의 파일의 흐름을 만든다. pipe코드는 컴파일할 수 있게 만든다.
~~~
$ npm install gulp-pug -D
~~~

## gulp delete module 설치 (생략 -> 오류발생...)
~~~
$ npm install ---save del
~~~

## gulp webserver 설치
* 진행중인 프로젝트의 웹 페이지를 바로 띄워줌
~~~
$ npm install --save-dev gulp-webserver
~~~

## gulp-watch
* 추가/삭제/변경 등을 감지
~~~
$ npm install gulp-watch
~~~

## gulp-image(생략 -> 오류발생...)

## gulp-sass
~~~
$ npm install sass gulp-sass --save-dev
$ npm install --save-dev node-sass
~~~

## gulp-autoprefixer
* 코드의 호환성을 도와줌
~~~
$ npm install --save-dev gulp-autoprefixer
~~~

## gulp-csso
* css파일을 최소화해줌.
* css는 띄어쓰기당 1byte를 차지. 간격을 최소화 시켜줘야 브라우저에서 빨리 가동
~~~
$ npm install gulp-csso --save-dev
~~~

## gulp-sourcemaps
* css의 전처리기인 sass를 컴파일하는 gulp-sass와 sass 파일을 역추적
~~~
 $ npm i gulp-sass gulp-sourcemaps --save--dev
~~~

## gulp-bro
~~~
$ npm install --save-dev gulp-bro
~~~

## gulp-uglifyify
~~~
$ npm install uglifyify
~~~

## gulp-typescript
~~~
$ npm install typescript gulp gulp-typescript -D
~~~


## 기타
* git commit 할 때, $ git add . 에러 발생 시
~~~
$ git config --global core.autocrlf true
~~~
