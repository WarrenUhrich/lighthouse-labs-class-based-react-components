import React, { Component } from 'react';

class Hello extends Component {
    constructor() {
        super(); // Runs regular component set-up, including `props` handling!
    }

    render() {
        return (
            <p>
                Hello, {this.props.name}!
            </p>
        );
    }
}

export default Hello;
