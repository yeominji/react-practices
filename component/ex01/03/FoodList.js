import React, { Component } from 'react';
import ListItem from './ListItem';

export default function FoodList() {

        return (
            <ul>
                { props.foods.map(()=> <ListItem 
                                             key={food.no}
                                             name={food.name} 
                                             quantity={food.quantity} />)} 
            </ul>  
        );
    }   