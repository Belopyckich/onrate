import reactDOM from "react-dom";
import { Provider } from "react-redux";
import AuthContextComponent from "./context/AuthContextComponent";
import App from './App';
import {store} from "./redux/store";
import './index.css';

reactDOM.render(
    <AuthContextComponent>
        <Provider store={store}>
            <App/>
        </Provider>
    </AuthContextComponent>
    ,document.getElementById('root')
);