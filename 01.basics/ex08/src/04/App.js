import React, { Fragment } from 'react';
import Header from './Header';
import Content from './Content';

export default function() {
    return (
        // <Fragment>
        //     <Header /> 
        //     <Content />            
        // </Fragment>
        React.createElement(
            Fragment,
            null,
            React.createElement(Header, null),
            React.createElement(Content, null)
        )    
    );

}