import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { api } from '../api/api';
import { getUsersThunk, ADD_FRIEND } from '../redux/reducer/userReducer';
import UserBlock from "../components/UserBlock/UserBlock";

const Main = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users);
    const [photo, setPhoto] = useState("");

    useEffect(() => {
        dispatch(getUsersThunk());
        api.getPhoto().then(photo => setPhoto(photo.url));
    }, [])

    return (
        <div>
            {users.map((friend, index) => 
                <UserBlock user={friend} actionType={ADD_FRIEND} key={index}/>
            )}
        </div>
    );
};

export default Main;