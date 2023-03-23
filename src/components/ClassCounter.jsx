import { Component } from 'react';

class ClassCounter extends Component {
    constructor() {
        super(); // Runs all default component setup.

        // We don't have access to hooks in class-based components.
        // Instead, we use a property called "state"
        this.state = {
            count: 0
        };

        // We are binding the the current object "this" to our method
        // this.increaseCount = this.increaseCount.bind(this);
    }

    // increaseCount() {
    //     // this = increaseCount
    //     this.setState({count: this.state.count + 1});
    // }

    increaseCount = () => {
        // this = (current instance of) ClassCounter
        this.setState({count: this.state.count + 1});
    }

    render() {
        return (
            <section>
                <h2>{this.props.heading}</h2>
                <button onClick={this.increaseCount}>
                    This button has been clicked {this.state.count} times.
                </button>
            </section>
        );
    }
}

export default ClassCounter;
