import React from 'react';
import Task from './Task';
import styles from '../asserts/css/TaskList';

export default function TaskList({ tasks }) {
    return (
        <div className={styles.TaskList}>
            <ul>
                { tasks.map(task => <Task
                                        key={ task.no }
                                        name={ task.name } /> )}
            </ul>
        </div>    
    );
}