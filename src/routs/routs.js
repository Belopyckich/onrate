import Users from "../pages/Users/Users";
import Profile from "../pages/Profile/Profile";
import Album from "../pages/Album/Album";
import Games from "../pages/Games/Games";
import Login from "../pages/Login/Login";
import Films from "../pages/Films/Films";

export const privateRoutes = [
    {name: 'profile', component: Profile, path: '/onrate/:profile/info', exact: true},
    {name: 'album', component: Album, path: '/onrate/:profile/album', exact: true},
    {name: 'users', component: Users, path: '/onrate/users', exact: true},
    {name: 'games', component: Games, path: '/onrate/games', exact: true},
    {name: 'films', component: Films, path: '/onrate/films', exact: true}
]

export const publicRoutes = [
    {name: 'login', component: Login, path: '/onrate/login', exact: true}
]