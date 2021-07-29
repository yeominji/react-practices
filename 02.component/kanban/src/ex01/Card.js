import React from 'react'; 
import TaskList from './TaskList'

export default function Card({title,description,tasks}) {
    return(
        <div class='Card'>
          <div class='Card__Title'>{title}</div>
          <div class='Card__Details'>
           {description}
         <TaskList tasks ={tasks}/>
            </div>
            </div>
            
    );
}
