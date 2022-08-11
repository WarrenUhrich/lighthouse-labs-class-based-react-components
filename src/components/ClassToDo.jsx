import { Component } from 'react';

class ClassToDo extends Component {
    constructor() {
        super();

        // Initial state.
        this.state = {
            newToDo: '',
            toDos: ['Learn About Functional Components']
        };
    }

    addNewToDo = (event) => {
        event.preventDefault();
        this.setState((prev) => {
            return {
                toDos: [...prev.toDos, prev.newToDo],
                newToDo: ''
            }
        });
    }

    removeToDo = (i) => {
        this.setState({
            toDos: this.state.toDos.filter((toDo, index) => index !== i)
        });
    }

    render() {
        return (
            <section>
                <h2>{this.props.heading || 'Class To-Do'}</h2>
                <form onSubmit={this.addNewToDo}>
                    <label htmlFor="new-to-do">Enter a new to-do:</label>
                    <input
                        id="new-to-do"
                        type="text"
                        onChange={event => this.setState({newToDo: event.target.value})}
                        value={this.state.newToDo} />
                    <input type="submit" value="Add To-Do" />
                </form>
                <h3>To-Dos:</h3>
                <ul>
                    {this.state.toDos.map((toDo, index) => <li key={index}>
                        {toDo}
                        <button onClick={() => {this.removeToDo(index);}}>Complete!</button>
                    </li>)}
                </ul>
            </section>
        );
    }
}

export default ClassToDo;
