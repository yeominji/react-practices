## ex04: Component LifeCycle
1. Mount LifeCycle 
  - construtor
  - getDerivedStateFromProps :props로 받아온 값을 state에 동기화 한다. 
  -render
  -componebtDidMount: 컴포넌트 생성을 마치고 첫 렌더링 작업이 끝난후 



2. Update LifeCydle
   - getDerivedStateFromProps :props로 받아온 값을 state에 동기화 한다. 
   - shouldComponentUdate:props,
   - render
   - getSnapshotBeforeUdate :render 메소드 호출 후, DOM 에 변화를 반영하기 직전에 호출
   - componentDidUpdate :DOM 업데이트가 끝난 직후 ,DOM 작업이 가능

  
3. Unmount LifeCycle 
  - componentwillUnmount : 컴포넌트 DOM에서 사라 질떄
4.  예제 src/01

## Function Component LifeCycle
1. 대체 (Alternative)<- willUnmount
2. After Rendding 함수(상태 변화 -> 렌더링 -> 함수)
3. 어떤 특정 상태 값은 변화에 반응하는 After Rending 함수
4. Alternative 2: componentDidMount
5. Alternative 3 :componentDidUpdate