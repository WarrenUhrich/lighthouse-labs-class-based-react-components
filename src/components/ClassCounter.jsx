import { Component } from 'react';

class ClassCounter extends Component {
    constructor() {
        super(); // Run the component constructor; sets up props, etc.

        // State! It is a property in this syntax.
        this.state = {
            count: 0
        };

        // A workaround to pass `this` in the correct context to a (traditional) method.
        this.increaseCount = this.increaseCount.bind(this);
    }

    /**
     * If you use this approach, you don't need the above bind.
    // Arrow functions / methods don't reset context for `this`
    increaseCount = () => {
        this.setState({count: this.state.count + 1});
    }
     */

    increaseCount () {
        this.setState({count: this.state.count + 1});
    }

    render() {
        return (
            <>
                <h2>{this.props.heading}</h2>
                <button onClick={this.increaseCount}>
                    This button has been clicked {this.state.count} times!
                </button>
            </>
        );
    }
}

export default ClassCounter;
