import {useState} from 'react';

export default function FunctionalCounter (props) {
    const [count, setCount] = useState(0);

    return (<>
        <h1>{props.heading}</h1>
        <button onClick={e => setCount(count + 1)}>
            Current Count is {count}
        </button>
    </>);
}
