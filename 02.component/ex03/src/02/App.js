import React, {Fragment} from 'react';

import TitleBar01 from './TitleBar01';
import TitleBar02 from './TitleBar02';

export default function () {
    return (
          
       <h1 onClick ={(e)=> 
        {console.log('click') 
         } }
         style={ { 
             cursor:'pointer'

         }}> 
           ex03 -Function  Handler(Class Component)
       </h1>
       
    );
}