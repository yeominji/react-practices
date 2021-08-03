import React, { Fragment } from 'react'; 
import CardList from './CardList';
import cards from './data.json';


 
    
     return(
        <div class ={'KanbanBoard'}>
         <CardList key="ToDo" title ={'To Do'} cards={cards.filter(card.staus=='ToDo')}/>
         <CardList key="Doing" title ={'Doing'}cards={cards.filter(card.staus=='Doing')} />
         <CardList key="Done" title ={'Done'} cards={cards.filter(card.staus=='Done')}/>
         </div>

     );
 }