import React, { Fragment, useRef, useState, useEffect } from 'react';

export default function Hook({ color }) {
    const [boxColor, setBoxColor] = useState( null );
    const [title, settitle] = useState( null );
    const h3Ref = useRef(null);
    
    //
     if(boxColor!==color){
        setBoxColor(color);
     }
        /**
         *  After Rendding 함수(상태 변화 -> 렌더링 -> 함수)
         * class component lifecycle (componentDidMount ,componentDidUdate)
         */

        useEffect(()=>{
           console.log ('After Rendering');
    });
    /**
     * 3. 어떤 윽정 상태릐 변화에 반ㅇ으 하는 After Rendering 함수
     *  :관심 분리
     */
     useEffect(()=>{
        console.log ('Update Color (DB) Using API....');
              },[boxColor]);
 /**
  * 4. Alternative 2: componentDidMount & componentWillUnMount
  */
  useEffect(()=>{
    console.log ('After Mount (componentDidMount)');
         return (function(){
            console.log ('After Mount (componentWillUnMount)');
         });
            },[]);
    return (
        <Fragment>
        <h3
            style={ {
                width: 300,
                height: 50,
                backgroundColor: boxColor
            } }
            ref={ h3Ref }    
        />
        <input 
          type ='text'
          value={title}
          onClick={()=>setTitle(e.target.value)}/>
       </Fragment>
    );
}