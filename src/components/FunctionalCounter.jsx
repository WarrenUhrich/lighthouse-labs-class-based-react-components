import { useState } from 'react';

export default function FunctionalCounter () {
    const [count, setCount] = useState(0);

    return (
        <button onClick={() => setCount(prev => prev + 1)}>
            This button has been clicked {count} times!
        </button>
    );
}
