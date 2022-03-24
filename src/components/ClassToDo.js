import { Component } from "react";

export default class ClassToDo extends Component {
    constructor() {
        super();

        this.state = {
            interval: null,
            color: 'black'
        };
    }

    componentDidMount() {
        console.log('ToDo Mounted');
        const interval = setInterval(() => {
            if (this.state.color === 'black') this.setState({color: 'red'});
            else this.setState({color: 'black'});
        }, 1000);
        this.setState({interval: interval});
    }

    componentDidUpdate() {
        console.log('ToDo Changed!');
    }

    componentWillUnmount() {
        console.log('ToDo going to Unmount');
        clearInterval(this.state.interval);
    }

    render() {
        return (
            <li onClick={this.props.onClick} style={{color: this.state.color}}>{this.props.text}</li>
        );
    }
}
