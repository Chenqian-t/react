import React from 'react';

function Message({data}) {
    return (
        <div className={data.from === 'id1' ? 'my-message' : ''}>
            <img src="#" alt="xxx"/>
            <div>
                <p>{data.from}</p>
                <p>{data.message}</p>
            </div>
        </div>
    )
}

export default Message
