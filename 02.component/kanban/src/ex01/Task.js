import React from 'react';
import styles from '../assets/css/Task.css';

export default function Task({ name }) {
    return (
        <li className={styles.TaskList__Task}>
        
            { name }
        </li>
    );
}