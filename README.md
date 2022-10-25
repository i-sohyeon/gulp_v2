# gulp plugin 설치

## $ npm install gulp-cli -g
* 전역 NPM Package에 Gulp를 설치해주어야함(콘솔에서 gulp를 사용하기 때문)

## mkdir gulp -> cd gulp
* gulp라는 폴더 생성 후 해당 폴더로 진입

## 
* gulp 폴더 내에 src 생성
* src폴더 : 컴파일 되길 원하는 모든 파일이 들어가는 폴더
* src폴더 구조 이미지 (추후 추가)

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

~~~
$ npm install gulp-pug -D
~~~
* 모든 pug 파일을 HTML로 바꾸는 task 만들기 -> 라이브러리 사용
* src를 이용해서 gulp는 일종의 파일의 흐름을 만든다. pipe코드는 컴파일할 수 있게 만든다.

## delete module 설치 (생략 -> 오류발생...)
~~~
$ npm install ---save del
~~~

## gulp webserver 설치
~~~
$ npm install --save-dev gulp-webserver
~~~

## gulp-watch

## gulp-image

## gulp-sass

## gulp-autoprefixer

## gulp-csso

## gulp-sourcemaps

## gulp-bro

## gulp-uglifyify


## 기타
* git commit 할 때, $ git add . 에러 발생 시
  * git config --global core.autocrlf true
