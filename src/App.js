import React, {useContext} from 'react';
import { AuthContext } from './context/AuthContextComponent';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from "./routs/AppRouter";
import Navbar from './components/Navbar/Navbar';

const App = () => {
    const {isAuth} = useContext(AuthContext)
    return (
        <BrowserRouter>
            {isAuth && <Navbar/>}
            <AppRouter/>
        </BrowserRouter>
    );
};

export default App;