import React, {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import style from "./Navbar.module.css";
import arrow from "../../image/arrow.svg";
const Navbar = () => {
    const [name, setName] = useState();

    useEffect(() => {
        setName(localStorage.getItem("user"));
    }, [])

    return (
        <div className={style.navbar}>
            <div className={style.header}>
                <div className={style.name}>{name}</div>
                <img className={style.arrow} src={arrow} alt={arrow}/>
            </div>
            <NavLink className={style.navlink} to="/onrate/main">Main</NavLink>
            <NavLink className={style.navlink} to="/onrate/friends">Friends</NavLink>
            <NavLink className={style.navlink} to="/onrate/photos">Photos</NavLink>
        </div>
    );
};

export default Navbar;