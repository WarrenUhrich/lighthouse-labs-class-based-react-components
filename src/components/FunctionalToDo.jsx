import { useState } from 'react';

export default function FunctionalToDo (props) {
    const [newToDo, setNewToDo] = useState('');
    const [toDos, setToDos] = useState(['Learn About Class-Based Components']);

    const addNewTodo = (event) => {
        event.preventDefault();
        setToDos(prev => {
            const newArr = [...prev, newToDo];
            //newArr.push(newToDo);
            return newArr;
        });
        setNewToDo('');
    };

    const removeToDo = (i) => {
        setToDos(prev => {
            const newArr = [...prev];
            // Set as an array EXCLUDING the target index item.
            return newArr.filter((toDo, index) => index !== i);
        });
    };

    const outputToDos = toDos.map((toDo, index) => <li key={index}>
        {toDo}
        <button onClick={() => {removeToDo(index);}}>Complete!</button>
    </li>);

    return (
        <section>
            <h2>{props.heading || 'Functional To-Do'}</h2>
            <form onSubmit={addNewTodo}>
                <label htmlFor="new-to-do">Enter a new to-do:</label>
                <input
                    id="new-to-do"
                    type="text"
                    onChange={event => setNewToDo(event.target.value)}
                    value={newToDo} />
                <input type="submit" value="Add To-Do" />
            </form>
            <h3>To-Dos:</h3>
            <ul>{outputToDos}</ul>
        </section>
    );
}