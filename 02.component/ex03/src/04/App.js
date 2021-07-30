import React, {Fragment} from 'react';
import logo from '../assets/images/react-logo.png';

export default function App() {
    const onKeyPressInput = function(e) {
        if(e.key = 'Enter') {
            console.log(e.target.value);
        }
    }

    const onFocusInput = function(e) {
        console.log('focused');
    }

    const onBlurInput = function(e) {
        console.log('blured');
    }

    const onMouseOverImage = function(e) {
        console.log('mouseover');
    }

    const onMouseMoveImage = function(e) {
        console.log('mousemove');
    }

    const onMouseOutImage = function(e) {
        console.log('mouseout');
    }

    const onMouseDownImage = function(e) {
        console.log('mousedown');
    }

    const onMouseUpImage = function(e) {
        console.log('mouseup');
    }

    const onClickImage = function(e) {
        console.log('clicked');
    }

    const onDoubleClickImage = function(e) {
        console.log('double clicked');
    }
    

    return (
        <Fragment>
            <h2>ex03 - Some Examples of Event Handler</h2>
            <input
                type='text'
                placeholder='메세지를 입력 하세요'
                onKeyPress={ onKeyPressInput }
                onFocus={ onFocusInput }
                onBlur={ onBlurInput } />
                <br/>
                <br/>
            <img
                style={ {
                    cursor: 'pointer',
                    width: 190,
                    border: '1px solid #ccc'
                } }
                src={ logo }
                onMouseOver={ onMouseOverImage }
                onMouseMove={ onMouseMoveImage }
                onMouseOut={ onMouseOutImage }
                onMouseDown={ onMouseDownImage }
                onMouseUp={ onMouseUpImage }
                onClick={ onClickImage }
                onDoubleClick={ onDoubleClickImage }/>
        </Fragment>
    );
}