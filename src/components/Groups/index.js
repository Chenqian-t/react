import React from 'react';
import './index.css';
import dayjs from 'dayjs';

function Groups({data}) {
    return (
        <div className='group-item'>
            <div className="group-avatar">
                {data.members.map(i => <img key={i} className="group-avatar-item" src='https://cdn.upchina.com/ZZCRM/user/headpic/zz0000001.jpg' alt={i}/>)}
            </div>
            <div className="group-content">
                <p>{data.groupname}</p>
                <p>{data.lastMsg}</p>
            </div>
            <div className="group-tips">
                <p>{dayjs(data.utime).format('HH:mm')}</p>
            </div>
        </div>
    )
}

export default Groups
