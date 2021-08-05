import React, { Component, Fragment, useState } from 'react';

export default class extends Component {
    constructor(){
        super(...arguments);
        this.state={
            color :null
        }
         console.log('[MOUNT01]:constant');

    }
    staticgetDerivedStateFromProp(nextProps,preState){
        console.log(`[MOUNT02][UPDATE01]: getDerivedStateFromProp(${nextProps},${prevState})`)
        return nextProps.color!==preState.color?{coior :nextProps.color}:null
    }

    render(){
console.log(`[MOUNT03][UPDATE03]:render()`)
        return(
            <h3 style= { {
                width: 300,
                heigth:50,
                backgroundColor:this.state.color
            } }/>
        )


    }
    /**
     * 컴포넌트 생성을 마치고 첫 렌더링 작업이 끝난후
     * 다른 자바스크립트 라이브러리 또는 프레임 워크  함수 호출 또는
     * 1.이벤트 등록
     * 2.타이머 설정 
     * 3.
     * 
     */
componentDidMount(){
    console.log(`[MOUNT0]:componentDidMount()`)
}  
}

