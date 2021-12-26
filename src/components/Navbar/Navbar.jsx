import React, {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import style from "./Navbar.module.css";
import ProfileNavigation from './ProfileNavigation';
const Navbar = () => {

    return (
        <div className={style.navbar}>
            <ProfileNavigation/>
            <NavLink className={style.navlink} to="/onrate/users">Users</NavLink>
            <NavLink className={style.navlink} to="/onrate/games">Games</NavLink>
            <NavLink className={style.navlink} to="/onrate/films">Films</NavLink>
        </div>
    );
};

export default Navbar;