## ex03: Component - State

### 01. 기본개념
1.state
   - 컴포넌트 내부의 상태관리 데이터
   - 컴포넌트는 this.state 안에 여러 데이터룰 가질 수있다.(class component)
   -this.state 은 특정 컴포넌트 전용이며 변경을 위해서는 setState()함수를 사용한다 (class component)
   - 상태가 업데이트 와면 컴포넌트의 반응형(Reactive)Rendering이 트리거가 되고 컴포넌트와 자식 컴포넌트가 다시 렌더링 된다.
     +컴포넌트 내부의 state은 최ㅏ소한으로 유지하는 것이 좋다.
     + 컴초넌트 내부의 state을 와부에 정확하게 나타내고 인테페이스의  동기회를 위해서 다시 렌더링 한다.
   - 컴포넌트가 동작(event)과 상호작용을 수행 할 수 있는 메커니즘을 제공한다.
   - 상태의 변경은 UI를 다시 렌더링 한다.
   - 클래스 컴포넌트에서는 consturtor 에서 default 값을 세팅으로 한다
   - 함수 컴포넌트에서는 useSTATE 라는 후크 함수를 사용해서 초기화 한다.
   - 대체적으로 사용자 이벤트로 변경돠거나 통신으로 변경된다.
   2. src/01 예제 
   

### 02.제어 컴포넌트
1. <input> ,<textarea>,<option>과 같은 폼 컴포넌트중에 사용자가 입역에 따라 state 값이 변경되고 렌더링 하는 컴포넌트를 제어 (Cotroller) 컴포넌트라고 한다.
2. 폼 컨포넌트가 반드시 제어 컴포넌트로 작성해야 하는것은 아니다. 상태를 제어하자 비제어(Uncontroller) 컴포넌트로 만들 수 있다.(Anti -pattern)
3. 폼 컨포넌트를 제어 컴포넌트로 만드는 것은  조금 복잡해 보이지만 다음과 같은 장점이 있다.
 - 컴포넌트의 인터페이스를 외부에서 직접 변경 할 수 없고  내부의 상태 변경으로 가능하다는 리 액트의 컴포넌트 작성 원칙을 준수 할 수 있다.
 -사용자 입역 가뵤에 대한 Validation을 할 수 있다.
 4.  예제
  -src/02 제어 컴포넌트
  -src/03 비제어 컴포넌트


### 03. 비제어 컴포넌트(Anti-pattern)
### 04. 상테(Stateful) 컴포넌트 vs 순수(Pure, Dumb)Component
### 04. Data Flow(Dowu-up)


### Run Examples
```bash
$ npm run debug src={no}
```