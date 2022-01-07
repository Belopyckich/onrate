import Users from "../pages/Users/Users";
import Profile from "../pages/Profile/Profile";
import Album from "../pages/Album/Album";
import Games from "../pages/Games/Games";
import Login from "../pages/Login/Login";
import Films from "../pages/Films/Films";
import ChangeInfoModal from "../pages/ChangeInfoModal/ChangeInfoModal";
import Game from "../pages/Game/Game";

export const privateRoutes = [
    {name: 'profile', component: Profile, path: '/onrate/:username/info', exact: true},
    {name: 'album', component: Album, path: '/onrate/:username/album', exact: true},
    {name: 'users', component: Users, path: '/onrate/users', exact: true},
    {name: 'games', component: Games, path: '/onrate/games', exact: true},
    {name: 'films', component: Films, path: '/onrate/films', exact: true},
    {name: 'changeInfo', component: ChangeInfoModal, path: '/onrate/changeInfo', exact: true},
    {name: 'game', component: Game, path: '/onrate/games/:slug' },
]

export const publicRoutes = [
    {name: 'login', component: Login, path: '/onrate/login', exact: true}
]