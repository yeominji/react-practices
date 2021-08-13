import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';
import styles from './assets/css/TaskList.css';

export default function TaskList({ tasks }) {
    return (
        <div className={ styles.TaskList }>
            <ul>
                { tasks.map(task => <Task
                                        key={ task.no }
                                        name={ task.name } /> )}
            </ul>
            <input
              type ='text'
              className={styles.askList_input_add_task}
              placeholder={'테스크 추가'}
              onKeyPress={(e)=>{
                  if(e.key =='Enter'){
                      console.log('keypress:',e.target.value);
                      e.target.value='';
                  }
              }}/>

        </div>    
    );
}

TaskList.propTypes = {
   tasks: PropTypes.arrayOf(PropTypes.object).isRequired 
}