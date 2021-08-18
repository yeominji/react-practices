import React from 'react';
import {Link, NavLink} from 'react-router-dom';

export default function Guestbook(){
    const selectedStyle = {
        backgroundColor: 'blue',
        color: 'white'
    };
        
    return (
        <div>
            <h1>Guestbook</h1>
            {
                /*
                <ul>
                    <li><Link to={'/'}>[Main]</Link></li>
                    <li><Link to={'/guestbook'}>[Guestbook]</Link></li>
                    <li><Link to={'/gallery'}>[Gallery]</Link></li>
                </ul>
                /*/
            }
            {
                <ul>
                    <li><NavLink to={'/'} activeStyle={selectedStyle}>[Main]</NavLink></li>
                    <li><NavLink to={'/guestbook'} activeStyle={selectedStyle}>[Guestbook]</NavLink></li>
                    <li><NavLink to={'/gallery'} activeStyle={selectedStyle}>[Gallery]</NavLink></li>
                </ul>
                //*/
            }


        </div>
    )
}