import React, {Component} from 'react';

export default class TitelBar01 extends Component {

   
   constructor(){
       super(...arguments);
       this.state={
          no: 10
       }
   }
   
   
    onClickHeader(e) {
     //this.no++
      // console.log('TitelBar01 click',":",this.no) 
      // this.render();
       console.log('TitelBar01 click',":", this.state.no);
       this.setState({
           no:this.state.no+1
       })
     } 

    render() {
        return (
            <h1 onClick ={ this.onClickHeader.bind(this)}
                 style={ { 
                     cursor:'pointer'
        
                 }}> 
                   ex03 -Function  Handler(Functional Component)
                   {this.state.no}
               </h1>
        )
    }
}