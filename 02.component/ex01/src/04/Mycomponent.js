import React, {Fragment} from 'react';
import {PropTypes} from 'prop-types';

export default function MyComponent({ props01, props02, props03 ,props04, props05, props06, props07 }) {
    return (
        <Fragment>
            <h2>Property Validation</h2>
            <span>props01: { props01 ? props01 : '---not set---' }</span>
            <br/>
            <span>props02: { props02 ? props02 : '---not set---' }</span>
            <br/>
            <span>props03: { props03 ? `${props03}` : '---not set---' }</span>
            <br/>
            <span>props04: { props04 ? props04.no : '---not set---' }</span>
            <br/>
            <span>props05: { props05 ? props05.map((e,i)=><b key ={i}>{e}{' '}</b>) : '---not set---' }</span>
            <br/>
            <span>props06: { props06 ? props06 : '---not set---' }</span>
            <br/>
        </Fragment>    
    );    
}

MyComponent.propTypes = {
    // [Built-in propTypes Validator: primitives]
    props01: PropTypes.string,
    props02: PropTypes.number.isRequired,
    props03: PropTypes.bool.isRequired,
    props04: PropTypes.object.isRequired,
    props05: PropTypes.array.isRequired,
    props06: PropTypes.func.isRequired,

  // [Built-in propTypes Validator: Combined Promitives]
  props07:PropTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
  props08: propTypes.arrayOf(propTypes.bool),
  prop09:,
}.isRequired



MyComponent.defaultProps={
props01:'기본값',
props02: 0,
props03:false,
props04: null,
props05: [],
props06:()=> {} //dummy function
}
    

