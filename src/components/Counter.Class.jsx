import React, { Component } from 'react';

class ClassCounter extends Component {
    constructor() {
        super(); // to grab our props...

        // Set our initial state / state signature:
        this.state = { count: 0 };

        // this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        this.setState(prev => ({count: prev.count + 1}));
    }

    // handleClick() { // method declaration will bind state based on context!
    //     // this.state.count++; // NO NEVER UPDATE STATE DIRECTLY!
    //     this.setState({count: this.state.count + 1});
    // }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.props.name} button has been clicked {this.state.count} times!
            </button>
        );
    }
}

export default ClassCounter;
