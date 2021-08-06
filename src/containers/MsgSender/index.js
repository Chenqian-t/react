import React, { useState } from 'react';
import './index.css';

function MsgSender({ sendMsg }) {
    const [value, setValue] = useState('');
    const [isFocus, setIsFocus] = useState(false);
    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && e.ctrlKey) {
            setValue(value + '\n');
        } else if (e.key === 'Enter') {
            e.preventDefault();
            handleClick();
        }
    }
    const handleClick = () => {
        sendMsg(value);
        setValue('');
    }
    const handleFocus = () => {
        setIsFocus(true);
    }
    const handleBlur = () => {
        setIsFocus(false);
    }
    return (
        <div className={isFocus ? 'msg-sender focus' : 'msg-sender'}>
            <textarea onKeyDown={handleKeyDown} onFocus={handleFocus} onBlur={handleBlur} onChange={e => setValue(e.target.value)} value={value}></textarea><br />
            <button onClick={handleClick}>发送(s)</button>
        </div>
    )
}

export default MsgSender
