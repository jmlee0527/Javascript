# Javascript

### Javascript란?
JavaScript는 객체 기반의 스크립트 프로그래밍 언어로 웹의 동적 동작을 구현하고 상호작용하는 기능을 제공한다.

JavaScript는 동적인 언어라는 특징을 가지며 변수의 선언과 데이터 타입을 사전에 명시하지 않고 유연하게 사용이 가능하다.


### Javascript의 특징
1. 객체 지향 프로그래밍의 개념을 제공하며, 프로토타입 기반의 상속을 사용
2. 함수형 프로그래밍 스타일을 지원하며 클로저와 같은 기능을 활용
3. 이벤트 기반 프로그래밍을 지원하여 이벤트에 대한 처리
4. Node.js 플랫폼을 사용하여 서버 측 코드를 작성하고 실행하는 것이 가능

## DOM이란?
DOM(Document Obeject Model)은 웹 페이지의 요소들을 트리 구조로 표현하며 각 요소는 객체로 Javascript를 통해 동적으로 조작이 가능하다.

Javascript를 사용하여 DOM 요소를 선택 및 조작이 가능
이벤트 리스너를 등록하여 특정 이벤트 발생 시 함수를 실행
요소를 추가,삭제,스타일 변경 등의 작업이 가능

즉, Javascript의 DOM 조작을 통해 웹의 동적인 효과를 구현하고 사용자의 상호작용을 처리 가능하다.

## 비동기 프로그래밍
동기적 처리(Synchronous) : 동기적 처리방식은 작업을 순차적으로 진행하며 이전 작업이 완료되어야 다음 작업 수행이 가능

비동기적 처리(Asynchronous) : 비동기적 처리 방식은 작업이 백그라운드에서 병렬적으로 진행되며 결과를 기다리는 동안 다른 작업 수행이 가능

#### 비동기 프로그래밍을 사용하는 이유
1. I/O 작업같은 시간이 오래 걸리는 작업을 기다리지 않고 다른 작업을 수행하여 프로그램 성능 향상
2. 사용자 인터페이스의 응답성을 높일 수 있다.
3. 여러 작업을 병렬적으로 처리하여 전체 시스템의 처리량을 향상 시킬 수 있다.

#### 콜백 함수(Callback Function)
콜백 함수는 비동기 작업의 결과를 처리하기 위해 사용되는 함수로 다른 함수의 인자로 전달되고 나중에 호출된다.


즉, 인자로 넘겨지는 함수를 콜백 함수라고 한다.
#### Promise
Promise는 비동기 작업의 성공 또는 실패와 같은 상태를 나타내는 객체로 비동기 작업을 Promise 객체로 감싸고 then,catch를 사용하여 성공여부를 처리한다.

## AJAX
AJAX(Asynchronous JavaScript and XML)는 웹 페이지에서 비동기적으로 서버와 데이터를 교환하기 위한 기술


<XMLHttpRequest 객체 생성>

    const xhr = new XMLHttpRequest();

## Mini Project : Movie Search

OMDF API - 영화 정보를 제공하는 무료 API


URL : http://www.omdbapi.com/ 
#### 영화 검색 사이트
###### 초기화면
<p><img width="350" alt="image" src="https://github.com/jmlee0527/Javascript/assets/115601680/7e6baf31-4cde-42e9-b465-8b0220a4df55"></p>  

###### 검색결과
<img width="400" alt="image" src="https://github.com/jmlee0527/Javascript/assets/115601680/cf99b72f-83de-43f0-974a-b27020492680">  


