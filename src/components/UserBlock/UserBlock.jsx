import React from 'react';
import style from "./UserBlock.module.css";
import { useDispatch } from 'react-redux';
import MyButton from "../UI/MyButton/MyButton";
import { useHistory } from 'react-router-dom';

const UserBlock = ({user, actionType, ...props}) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const buttonName = actionType.replace('_', ' ');
    
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
                <MyButton onClick={() => dispatch({type: actionType, payload: user})}>{buttonName}</MyButton>
                <MyButton onClick={() => history.push(`/onrate/${user.login.username}/info`)}>OPEN PROFILE</MyButton>
            </div>
        </div>
    );
};

export default UserBlock;