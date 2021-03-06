---
meta:
  - name: keywords
    content: reactive programming
  - name: description
    content: Reactive Programming 이란?
  - property: og:title
    content: Reactive Programming 이란?
  - property: og:description
    content: Reactive Programming 이 뭔지 간단하게 훑어보자.
  - property: og:url
    content: https://realgoways.github.io/TIL/Concept/reactive-programming.html
  - property: twitter:url
    content: https://realgoways.github.io/TIL/Concept/reactive-programming.html
---

# Reactive Programming

회사 동료와 이런 저런 얘기 하다  
'리액티브 프로그래밍' 이 언급됐는데... 이게 정확히 뭘까?  
하는 궁금증에서 이 페이지는 시작되었음.

> Reactive programming is programming with asynchronous data streams.

한 마디로 비동기적 데이터 흐름을 처리하는 프로그래밍.  
사용자 입장에서 보면 실시간으로 반응 하는 것.  

## Reactive Programming 의 핵심
- Async Event
- Observer Design Pattern

왜 저 2개가 핵심인지 잘 생각해보면... 

비동기 이벤트는 하나의 작업이 끝날 때까지 기다리는게 아니라 다양한 작업들이 동시에 수행되고 종료되고 하는 것을 말한다.  
유저가 서비스를 이용하는 동안 (로그인을 하고 웹 사이트에 접속하고 다른 사람의 포스트를 읽고 좋아요를 누르고 기사를 공유하고... 등등)  
유저를 방해하지 않으면서 뒷단에서 데이터를 가져오는 작업이 바로 비동기적 작업이라고 할 수 있다.  

유저가 어떤 액션을 수행할 때마다 즉각적으로 반응을 하려면,  
프로그램이 지속적으로 관찰을 하고 있어야 하고 변화가 있을 때 마다 특정 연산이 수행되어야 한다.  

그러니 비동기 이벤트와 옵저버 패턴은 리액티브 프로그래밍의 중요한 핵심이라고 할 수 있을 듯.  


일단은 개념만 간단히 정리.  


## 참고 사이트

[https://gist.github.com/staltz/868e7e9bc2a7b8c1f754](https://gist.github.com/staltz/868e7e9bc2a7b8c1f754)