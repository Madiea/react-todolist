import React, {useState} from 'react';
import ListForm from './ListForm';
import Task from './Task';

function TaskList() {
    const [tasks, setTasks] = useState([]);

    /** Add a task into tasks list
     * then update it with setTasks
     */
    const addTask = task => {
        const updatedList = [...tasks, task];
        setTasks(updatedList);
    };

    /**
     * edit task by getting it with its ID
     * then replace its value with new input value 
     */
    const updateTask = (taskId, newText) => {
        setTasks(prev => prev.map(item => (item.id === taskId ? newText : item)));
    };

    /* Delete a task by filtering by its ID */
    const deleteTask = id => {
        const removeTask = tasks.filter(task => task.id !== id);
        setTasks(removeTask);
    };

    /* get task by ID for setting it to done */
    const completeTask = id => {
        const updatedTasks = tasks.map(task => {
          if (task.id === id) {
            task.isComplete = !task.isComplete;
          }
          return task;
        });

        setTasks(updatedTasks);
    };
   
    return (
        <div className="flex flex-col item-center justify-center rounded shadow p-2 m-2">
            <ListForm onSubmit={addTask}/>
            <Task 
                tasks={tasks} 
                completeTask={completeTask}
                deleteTask={deleteTask} 
                updateTask={updateTask}
            />
        </div>
    )
}

export default TaskList;
