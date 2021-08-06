import React from 'react';
import './index.css';

function Message({ data }) {
    return (
        <div className={data.from === 'id1' ? 'my-message message-box' : 'message-box'}>
            <img src="https://cdn.upchina.com/ZZCRM/user/headpic/zz0000001.jpg" alt="xxx" className={data.from === 'id1' ? 'my-avatar' : ''} />
            <div className='message-content'>
                <p>{data.from}</p>
                <p className={data.from === 'id1' ? 'my-message-content-detail message-content-detail' : 'message-content-detail'}>{data.message.replace('\n', ' \n ')}</p>
            </div>
        </div>
    )
}

export default Message
