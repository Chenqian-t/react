import React from 'react';

export default function Link({ active, children, onClick }) {
    if (active) {
        return <span>{children}</span>
    }

    return (
        <button
            onClick={e => {
                e.preventDefault();
                onClick();
            }}
        >
            {children}
        </button>
    )
}
