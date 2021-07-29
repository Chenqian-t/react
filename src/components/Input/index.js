import React, { useState } from 'react';

export default function Input() {
    const [value, setValue] = useState(1);
    return (
        <div>
            {value}<br />
            <button onClick={() => setValue(value + 1)}>
                Click me
            </button>
        </div>
    )
}
