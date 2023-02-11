<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->



## 📌 서버 실행 방법

#### 1. 서버 실행 전 typeorm.config.ts 파일 내 환경 변수 수정
    - type, host, port ...
    
#### 2. 서버 실행 전 필요한 node_module 다운
    - npm i
    
#### 3.  "npm run start:dev" 명령어를 통해 서버 실행
    - npm run start:dev
</br>

## ERD Diagram
<a href="https://ibb.co/dr5JG64"><img src="https://i.ibb.co/37CYBWm/survey-schema.png" alt="survey-schema" border="0"></a>




## 📌 구현 API 목록

#### Survey 

- createSurvey : 설문 생성하기
- updateSurvey : 설문 수정하기
- deleteSurvey : 설문 삭제하기 ( 참조된 테이블 데이터 삭제 )
- getAllsurvey : 모든 설문 불러오기
- getSurveyByStatus : 특정 상태의 설문 불러오기 ( 진행 중 | 종료 )
- getSurveyById : 특정 id의 설문 불러오기

#### Question

- createQuestion: 질문 생성하기
- getAllQuestion : 모든 질문 목록 불러오기
- getQuestionBySurveyId : 특정 설문의 질문 목록 불러오기

#### User

- createUser : 유저 생성하기
- getAllUser : 모든 유저 불러오기
- getUserByName : 특정 이름의 유저 불러오기
- getUserById : 특정 ID의 유저 불러오기

#### UserSurvey

- createUserSurvey : 유저가 참가 할 설문 생성하기.
- getAllUserSurvey : 현재 생성된 모든 유저들의 설문목록 불러오기
- getUserSurveyByStatus : 특정 상태의 설문목록 불러오기 ( 미완료 | 완료 )
- getUserSurveyById : 특정 ID의 설문목록 불러오기
- sumScore : 유저가 참여한 특정 id의 설문의 완료 여부 및 총 점수 합산하기
 </p> 



#### Answer

- createAnswer : 응답 생성하기
- getAllAnswer : 모든 응답 불러오기
- getAnswerUserSurveyId : 유저가 참여한 설문의 모든 응답 불러오기

#### QuestionOption 

- createQuestionOption : 질문의 선택사항 생성하기
- getAllQuestionOption : 모든 질문의 선택사항 불러오기
- getQuestionById : 특정 질문의 선택사항 불러오기

#### AnswerOption

- createAnswerOption : 유저가 고른 선택사항 생성하기
- getAllAnswerOption : 유저가 선택한 모든 질문의 선택사항 불러오기


