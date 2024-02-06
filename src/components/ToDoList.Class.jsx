import React, { Component } from 'react';

class ClassToDoList extends Component {
    constructor() {
        super();

        this.state = {
            newToDo: '',
            toDos: [
                'Buy Milk',
                'Learn about Functional Components in React'
            ]
        };
    }

    handleChange = (event) => {
        this.setState(prev => ({...prev, newToDo: event.target.value}));
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState(prev => {
            const newToDoList = [...prev.toDos, prev.newToDo];

            return {...prev, toDos: newToDoList, newToDo: ''};
        });
    }

    render() {
        return (
            <section>
                <h2>{this.props.heading}</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Please Enter New Task:
                        <input
                            type="text"
                            onChange={this.handleChange}
                            value={this.state.newToDo}
                        />
                    </label>
                    <input type="submit" value="Add New To-Do!" />
                </form>
                <ul>
                    {this.state.toDos.map((toDo, index) => <li key={index}>{toDo}</li>)}
                </ul>
            </section>
        );
    }
}

export default ClassToDoList;