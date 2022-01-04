import React from 'react';
import style from "./UserBlock.module.css";
import { useDispatch, useSelector } from 'react-redux';
import {ADD_FRIEND, REMOVE_FRIEND} from "../../redux/reducer/profileReducer";
import MyButton from "../UI/MyButton/MyButton";
import { useHistory } from 'react-router-dom';

const UserBlock = ({user, ...props}) => {
    const friends = useSelector(state => state.profile.friends);
    const history = useHistory(); 
    const dispatch = useDispatch();

    return (
        <div className={style.user} {...props}>
            <div className={style.userInfo}>
                <img src={user.picture.medium} alt={`${user.name.first}`}/>
                <div className={style.userText}>
                    <div className={style.name}>{user.name.first} {user.name.last}</div>
                    <div className={style.email}>{user.email}</div>
                </div>
            </div>
            <div className={style.userButtons}>
                {friends.includes(user) ?
                        <MyButton onClick={() => dispatch({type: REMOVE_FRIEND, payload: user})}>REMOVE FRIEND</MyButton>
                        :
                        <MyButton onClick={() => dispatch({type: ADD_FRIEND, payload: user})}>ADD FRIEND</MyButton>
                }
                <MyButton onClick={() => history.push(`/onrate/${user.login.username}/info`)}>OPEN PROFILE</MyButton>
            </div>
        </div>
    );
};

export default UserBlock;