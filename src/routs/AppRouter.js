import React, { useContext } from 'react';
import {Switch, Route, Redirect } from 'react-router-dom';
import {AuthContext} from "../context/AuthContextComponent"
import {publicRoutes, privateRoutes} from "./routs";

const AppRouter = () => {
    const {isAuth} = useContext(AuthContext);

    return (
        isAuth ?

        <Switch>
            {privateRoutes.map(route => 
                <Route key={route.name} name={route.name} component={route.component} path={route.path} exact={route.exact}/>
            )}
            <Redirect to="/onrate/main"/>
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