import {Component} from 'react';

export default class ClassIntervalCounter extends Component {
    constructor() {
        super();

        this.state = {
            count: 0,
            interval: null
        };
    }

    // SIMILAR TO: useEffect(()=>{}, []); // On first render.
    componentDidMount(){
        console.log('Mounted!');
        const interval = setInterval(() => {
            this.setState({count: this.state.count + 1});
        }, 1000);
        console.log(interval);
        this.setState({interval: interval});
    }

    // SIMILAR TO: useEffect(()=>{}, [count]); // On value update.
    componentDidUpdate(){
        console.log('Updated!');
    }

    componentWillUnmount(){ // Pre-removal.
        console.log('Ready for unmount!');
        clearInterval(this.state.interval);
    }

    render() {
        return (<>
            <h1>Our Count is: {this.state.count}</h1>
        </>);
    }
}
