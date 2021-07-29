import React, { Fragment } from 'react';
import CardList from './CardList';
import cards from './data.json';
import styles from './assets/css/KanbanBoard';

export default function KanbanBoard() {
    return (
        <div className={styles.KanbanBoard}>
            <CardList key="ToDo" title={'ToDo'} cards={cards.filter(card => card.status=='ToDo')}/>
            <CardList key="Doing" title={'Doing'} cards={cards.filter(card => card.status=='Doing')}/>
            <CardList key="Done" title={'Done'} cards={cards.filter(card => card.status=='Done')}/>
        </div>
    );
}