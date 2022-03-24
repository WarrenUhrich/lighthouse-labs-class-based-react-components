import {Component} from 'react';

class ClassCounter extends Component {
    constructor(){
        super(); // Run Component's constructor, it will setup defaults, props, etc. for you.
        
        // Set default state.
        this.state = {
            count: 0
        };

        this.increaseCount = this.increaseCount.bind(this); // Binds "this", so it is not out-of-context in DOM mention.
    }

    increaseCount(){
        this.setState({count: this.state.count + 1});
    }

    render(){ // Render must return your component output!
        return (<>
            <h1>{this.props.heading}</h1>
            <button onClick={this.increaseCount}>
                Current count is {this.state.count}
            </button>
        </>);
    }
}

export default ClassCounter;
