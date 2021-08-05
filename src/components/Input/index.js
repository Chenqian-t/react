import React, {useState} from 'react';

export default function Input(props) {
    const [value, setValue] =  useState('');
    return (
        <div>
            <textarea onChange={e => setValue(e.target.value)} value={value}></textarea>
            <button onClick={() => props.sendMsg(value)}>发送</button>
        </div>
    )
}
