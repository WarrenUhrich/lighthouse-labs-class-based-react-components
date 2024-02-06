import React, { useState } from 'react';

const ToDoList = (props) => {
    const [newToDo, setNewToDo] = useState('');
    const [toDos, setToDos] = useState([
        'Buy Milk',
        'Learn about Class-Based components in React'
    ]);

    const handleChange = (event) => setNewToDo(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();

        setToDos(prev => {
            const newToDoList = [...prev, newToDo];
            setNewToDo('');
            return newToDoList;
        });
    };

    return (
        <section>
            <h2>{props.heading}</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    New Task:
                    <input
                        type="text"
                        onChange={handleChange}
                        value={newToDo}
                    />  
                </label>
                <input
                    type="submit"
                    value="Add New To-Do"
                />
            </form>
            <ul>
                {toDos.map((toDo, index) => <li key={index}>{toDo}</li>)}
            </ul>
        </section>
    );
};

export default ToDoList;
