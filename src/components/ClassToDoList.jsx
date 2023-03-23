import { Component } from 'react';

export default class ClassToDoList extends Component {
    state = {
        newToDo: '',
        toDos: [
            'Buy Milk',
            'Learn about class-based React components'
        ]
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState((prev) => {
            return {
                toDos: [...prev.toDos, prev.newToDo],
                newToDo: ''
            };
        });
    }

    removeToDo = (id) => {
        this.setState((prev) => {
            return {
                toDos: [...prev.toDos.filter((toDo, index) => index !== id)]
            };
        });
    }

    render() {
        return (
            <section>
                <h2>Class-based To-Do List</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Enter a new to-do:
                        <input
                            type="text"
                            value={this.state.newToDo}
                            onChange={event => this.setState({newToDo: event.target.value})}
                        />
                        <input type="submit" value="Add New To-Do" />
                    </label>
                </form>
                <ul>
                    {this.state.toDos.map((toDo, index) => <li key={index} onClick={() => this.removeToDo(index)}>
                        {toDo}
                    </li>)}
                </ul>
            </section>
        );
    }
};
