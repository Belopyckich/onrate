import React, { useContext, useEffect } from 'react';
import {Switch, Route, Redirect } from 'react-router-dom';
import {AuthContext} from "../context/AuthContextComponent"
import {publicRoutes, privateRoutes} from "./routs";

const AppRouter = () => {
    const {isAuth, user} = useContext(AuthContext);

    useEffect(() => {
        console.log(user);
        localStorage.setItem('user', JSON.stringify(user));
    }, [user])

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