import {Component} from 'react';

class ClassCounter extends Component {
    constructor(){
        super(); // Run Component's constructor, it will setup defaults, props, etc. for you.
        
        // Set default state.
        this.state = {
            count: 0
        };
    }

    render(){ // Render must return your component output!
        return (<>
            <h1>{this.props.heading}</h1>
            <button>Current count is {this.state.count}</button>
        </>);
    }
}

export default ClassCounter;
