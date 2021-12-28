import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from "../../context/AuthContextComponent";
import { NavLink } from 'react-router-dom';
import style from "./Navbar.module.css";
import arrow from "../../image/arrow.svg";

const ProfileNavigation = () => {
    const {myProfile} = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div className={isOpen ? style.profileOpen : style.profileClose}>
            <div className={style.navigation}>
                <div className={style.title} onClick={() => setIsOpen(!isOpen)}>
                    <div className={style.name}>{myProfile.login.username?.toUpperCase()}</div>
                    <img className={isOpen ? style.arrowOf : style.arrowOn} src={arrow} alt={arrow}/>
                </div>
                {isOpen &&
                    <div className={style.menu}>
                        <NavLink className={style.link} to={`/onrate/${myProfile.login?.username}/info`} onClick={() => setIsOpen(!isOpen)}>Profile</NavLink>
                        <NavLink className={style.link} to={`/onrate/${myProfile.login?.username}/album`} onClick={() => setIsOpen(!isOpen)}>Album</NavLink>
                    </div>
                }
            </div>
        </div>
    )
};

export default ProfileNavigation;