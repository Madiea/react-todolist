import React, {useState, useEffect, useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library} from '@fortawesome/fontawesome-svg-core';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

library.add(faPlusSquare);

function ListForm(props) {
    const [newTask, setNewTask] = useState(props.edit ? props.edit.value : '');
    const inputRef = useRef(null);

    /* focus on current input by getting its ref */
    useEffect(() => {
        inputRef.current.focus();
    });

    const handleChange = event => {
        setNewTask(event.currentTarget.value);
    };

    /**
     * Avoid refreshing page on submit
     * Set task value on submit
    */
    const handleSubmit = event => {
        event.preventDefault();    

        props.onSubmit({
            id: new Date().getTime(),
            text: newTask
        });
        setNewTask('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="flex flex-row justify-evenly mb-2 font-sans">
                {props.edit ? (
                    <>
                    <input
                        type="text"
                        placeholder="Edit your task"
                        value={newTask}
                        onChange={handleChange}
                        ref={inputRef}
                        className="border-2 border-blue-500 rounded p-2 w-full"
                    />
                    <button onClick={handleSubmit} className="border-none bg-blue-500 rounded p-4 m-1">Save</button>
                    </>
                ):
                (
                    <>
                    <input
                        type="text"
                        placeholder="New task"
                        value={newTask}
                        onChange={handleChange}
                        ref={inputRef}
                        className="border-2 border-black rounded p-2 w-full"
                    />
                    <button onClick={handleSubmit} className="border-none bg-black rounded p-4 m-1">
                        <FontAwesomeIcon icon="plus-square" style={{color:"white"}} />
                    </button>
                    </>
                )}                
            </form>            
        </div>
    );
}

export default ListForm;
