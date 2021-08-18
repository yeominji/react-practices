import React, { useState, useEffect } from 'react';
import update from 'react-addons-update';
import CardList from './CardList';
import styles from './assets/css/KanbanBoard.css';

export default function KanbanBoard() {
    const [cards, setCards] = useState([]);

    useEffect(async () => {
        try {
            const response = await fetch('/api/cards', {
                method:'get',
                headers:{'Content-Type': 'application/json'}
            });

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();
            if(json.result !== 'success'){
                throw new Error(`${json.result} ${json.message}`);
            }

            setCards(json.data);    
        } catch(err){
            console.error(err);
        }
    }, []);

    const notifyTask = {
        add: async function(cardNo, taskName){
            try {
                console.log('notify task add', cardNo, taskName);
                const url = `/api/card/${cardNo}/task`;
                const task = {
                    no: null,
                    name: taskName,
                    done: false
                }

                const response = await fetch(url, {
                    method:'post',
                    headers:{'Content-Type': 'application/json'},
                    body: JSON.stringify(task)
                });
    
                if(!response.ok) {
                    throw new Error(`${response.status} ${response.statusText}`);
                }
    
                const json = await response.json();
                if(json.result !== 'success'){
                    throw new Error(`${json.result} ${json.message}`);
                }
                
                const cardIndex = cards.findIndex((card) => card.no === cardNo);
 
                const newCards = update(cards, {
                    [cardIndex]: {
                        tasks: {
                            $push: [json.data]
                        }
                    }
                });

                setCards(newCards);
            } catch(err){
                console.error(err);
            }
        }
    };

    return (
        <div className={styles.KanbanBoard}>
            <CardList 
                key="ToDo" 
                title={'ToDo'} 
                cards={cards.filter(card => card.status=='ToDo')}
                notifyTask={ notifyTask }/>

            <CardList 
                key="Doing" 
                title={'Doing'} 
                cards={cards.filter(card => card.status=='Doing')}
                notifyTask={ notifyTask } />

            <CardList 
                key="Done" 
                title={'Done'} 
                cards={cards.filter(card => card.status=='Done')}
                notifyTask={ notifyTask } />
        </div>
    );
}