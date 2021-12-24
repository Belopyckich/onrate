import Main from "../pages/Main";
import Pictures from "../pages/Pictures";
import Friends from "../pages/Friends";
import Login from "../pages/Login/Login";

export const privateRoutes = [
    {name: 'main', component: Main, path: '/onrate/main', exact: true},
    {name: 'pictures', component: Pictures, path: '/onrate/pictures', exact: true},
    {name: 'friends', component: Friends, path: '/onrate/friends', exact: true}
]

export const publicRoutes = [
    {name: 'login', component: Login, path: '/onrate/login', exact: true}
]