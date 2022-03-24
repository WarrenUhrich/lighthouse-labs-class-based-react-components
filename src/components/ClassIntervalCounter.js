import {Component} from 'react';

export default class ClassIntervalCounter extends Component {
    constructor() {
        super();

        this.state = {
            count: 0,
            interval: null
        };
    }

    render() {
        return (<>
            <h1>Our Count is: {this.state.count}</h1>
        </>);
    }
}
