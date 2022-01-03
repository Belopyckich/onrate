import { BrowserRouter } from 'react-router-dom';
import AppRouter from "./routs/AppRouter";
import Navbar from './components/Navbar/Navbar';
import { useSelector } from 'react-redux';

const App = () => {
    const isAuth = useSelector(state => state.profile.isAuth);
    
    return (
        <BrowserRouter>
            {isAuth && <Navbar/>}
            <AppRouter/>
        </BrowserRouter>
    );
};

export default App;