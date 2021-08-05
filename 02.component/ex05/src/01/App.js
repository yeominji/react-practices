import React, { Fragment, useState } from 'react';
import LifeCycle from './LifeCycle';

export default function () {
  const[color,setColor]=useState('#000');

  const handleClick =function(){
    //'#998811'
    const color =(`#${Math.floor(Math.random() * 0xffffff).toString(16)}`);
    console.log(color);

  }
    return (
        <Fragment>
      <h2>ex05: Component LifeCycle</h2>
      <button onClick={ handleClick }>색상 변경</button>
      <br/>     
  {/*
     <LifeCyele color ={color}/>
  
  */  }
      </Fragment>
    );
}