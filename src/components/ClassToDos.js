import { Component } from "react";
import ClassToDo from './ClassToDo';

export default class ClassToDos extends Component {
    constructor() {
        super();

        this.state = {
            toDos: [
                'Buy Milk',
                'Study React'
            ]
        };
    }

    removeToDo(i) {
        console.log('index: ', i);
        const updatedToDos = this.state.toDos.filter((value, index) => index !== i); // Remove item with i.
        this.setState({toDos: updatedToDos});
    }

    render() {
        return (<>
            <h1>To-Dos</h1>
            <ul>
                {this.state.toDos.map((toDo, i) =>
                    <ClassToDo onClick={e => {this.removeToDo(i)}} key={i} text={toDo} />)}
            </ul>
        </>);
    }
}
