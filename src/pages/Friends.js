import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { REMOVE_FRIEND } from '../redux/reducer/userReducer';
import UserBlock from "../components/UserBlock/UserBlock";

const Friends = () => {
    const friends = useSelector(state => state.users.friends);

    return (
        <div>
            {friends.map((friend, index) => 
                <UserBlock user={friend} actionType={REMOVE_FRIEND} key={index}/>
            )}
        </div>
    )
};

export default Friends;