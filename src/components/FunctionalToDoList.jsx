import { useState } from 'react';

export default function FunctionalToDoList() {
    const [newToDo, setNewToDo] = useState('');
    const [toDos, setToDos] = useState([
        'Buy Milk',
        'Learn about class-based React components'
    ]);

    const handleSubmit = (event) => {
        event.preventDefault();

        setToDos((prev) => {
            return [...prev, newToDo];
        });
        
        setNewToDo('');
    };

    const removeToDo = (id) => {
        setToDos((prev) => {
            return [...prev.filter((toDo, index) => index !== id)]
        });
    };

    return (
        <section>
            <h2>Functional To-Do List</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Enter new To-Do:
                    <input
                        type="text"
                        value={newToDo}
                        onChange={(event) => setNewToDo(event.target.value)}
                    />
                    <input type="submit" value="Add To-Do" />
                </label>
            </form>
            <ul>
                {toDos.map((toDo, index) => <li key={index} onClick={() => removeToDo(index)}>
                    {toDo}
                </li>)}
            </ul>
        </section>
    );
}
