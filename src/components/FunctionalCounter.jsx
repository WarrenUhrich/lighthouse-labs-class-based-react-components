import { useState } from 'react';

export default function FunctionalCounter(props) {
    const [count, setCount] = useState(0);
    
    return (
        <section>
            <h2>{props.heading}</h2>
            <button onClick={() => setCount((prev) => prev + 1)}>
                This button has been clicked {count} times.
            </button>
        </section>
    );
}
