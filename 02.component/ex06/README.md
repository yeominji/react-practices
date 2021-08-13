## ex06: Immmutability of Component's State: 컴포넌트 상태의 변화의 불변성

### 기본개념
1. 절대 컴포넌트의 상태를 직접으로 변화 시켜셔는 안된다
2. 컴포넌트의 상태는 불변적으로 다루어야한다.
3.  항상 setState ,useState Hook 함수 호출에서 반환하는 setter 를 사용한다.

### 이유:
1. 직접적으로 this .state 를 변겨하면 React의 상태를 관리를 우회 ->React 원리를 어기는 거고 애플리케이션이 오작동 할 수 있다.
2. this.state를 직접 조작한 내용은 this.setState 호출로 무료화 된다.
3. 나중에 성능 개성의 여지가 없다
  - 객체의 변경 유무 검사시 객체의 동질성 비교 ->고비용
  - 객체의 변경 유무 검사시 객체의 동일성 비교 -> 저비용
4. 결론은 변경하지말고 교체하라!!!
5. 함수형 프로그래밍을 지원하는 자바스크립트 에서는 4번 내용이 표준이 아니다.
  -> 의도치 않게 변경 할 가능성이 있다.
  ### Violation Example
  ```javascript
  this .setState(
    emails:[{},{},{}]
  });
  const emails =this.state.emails;
  emails.push({});
  
  ```
### How I
  1. 비파괴 배열 메소드 및 연산자 :map,filter,concat,...(spread) 연산자
  2.src/01
### How II

### How III
6
### How IV



