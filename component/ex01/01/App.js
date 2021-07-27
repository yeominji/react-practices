import React, { Component } from "react";
import Foodlist from "./Foodlist";

export default class extends Component{
    constructor(){
        super(...arguments);
        this.foods=[
            {name :'Bread ',quantity:10},
            {name :'Egg ',quantity:10},
            {name :'Mlik ',quantity:10},
            
        ]
    }
    render(){
    return(
        <div id ='App'>
            <FoodList/>
            
        </div>
    );
 }
}