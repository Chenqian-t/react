import React from 'react';
import {useSelector} from 'react-redux';

const Home = () => {
    const userInfo = useSelector(state => ({...state.user}));

    return (
        <div>
            {JSON.stringify(userInfo)}
        </div>
    )
}

export default Home