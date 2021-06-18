import React, {useState} from 'react';
import ListForm from './ListForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library} from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);
library.add(faEdit);

function Task({ tasks, completeTask, deleteTask, updateTask }) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const updateOnSubmit = value => {
        updateTask(edit.id, value);
        setEdit({
            id: null,
            value: ''
        });
    };

    if (edit.id) {
        return <ListForm edit={edit} onSubmit={updateOnSubmit} />;
    }    

    return tasks.map((task, index) => (
        <div         
            className={task.isComplete ? 'task-row complete' : 'task-row'}
            key={index}
        >
            <div key={task.id} onClick={() => completeTask(task.id)} className="border border-black rounded p-2 w-full mb-1">
                {task.text}
            </div>
            <div className="flex flex-row mb-1 p-1">
                <button onClick={() => deleteTask(task.id)} className="border-none bg-red-500 rounded p-2 m-1"> 
                    <FontAwesomeIcon icon="trash" style={{color:"white"}} />
                </button>
                <button onClick={() => setEdit({id: task.id, value: task.text})} className="border-none bg-blue-500 rounded p-2 m-1">
                    <FontAwesomeIcon icon="edit" style={{color:"white"}} />
                </button>
            </div>
        </div>
    ));
}

export default Task;
