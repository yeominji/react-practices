import React from 'react';
import TaskList from './TaskList';
import styles from './assets/css/Card.css'

export default function Card({ title, description, tasks }) {
    return (
        <div className={styles.Card}>
          <div className={styles.Card__Title}>{ title }</div>
          <div className={styles.Card__Details}>
            { description }
            <TaskList tasks={ tasks }/>
          </div>
        </div>    
    );
}