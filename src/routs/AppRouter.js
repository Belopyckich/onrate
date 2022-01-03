import React, { useContext, useEffect } from 'react';
import {Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {publicRoutes, privateRoutes} from "./routs";
import { SET_PROFILE } from '../redux/reducer/profileReducer';

const AppRouter = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector(state => state.profile.isAuth);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('profile'))
        data !== null && dispatch({type: SET_PROFILE, payload: data});
    }, [])

    return (
        isAuth ?

        <Switch>
            {privateRoutes.map(route => 
                <Route key={route.name} name={route.name} component={route.component} path={route.path} exact={route.exact}/>
            )}
            <Redirect to="/onrate/users"/>
        </Switch>

        :

        <Switch>
            {publicRoutes.map(route => 
                <Route key={route.name} name={route.name} component={route.component} path={route.path} exact={route.exact}/>
            )}
            <Redirect to="/onrate/login"/>
        </Switch>
    );
};

export default AppRouter;