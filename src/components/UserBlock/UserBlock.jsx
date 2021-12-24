import React from 'react';
import style from "./UserBlock.module.css";
import { useDispatch } from 'react-redux';

const UserBlock = ({user, actionType, key}) => {

    const dispatch = useDispatch();
    console.log(actionType);

    return (
        <div className={style.user} key={key}>
            <img src={user.picture.medium} alt={`${user.name.first}`}/>
            <div className={style.userInfo}>
                <div className={style.name}>name: {user.name.first} {user.name.last}</div>
                <div className={style.email}>email: {user.email}</div>
                <button onClick={() => dispatch({type: actionType, payload: user})}>hfghgfhfghfg</button>
            </div>
        </div>
    );
};

export default UserBlock;