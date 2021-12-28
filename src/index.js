import reactDOM from "react-dom";
import { Provider } from "react-redux";
import AuthContextComponent from "./context/AuthContextComponent";
import App from './App';
import {store} from "./redux/store";
import './index.css';

reactDOM.render(
        <Provider store={store}>
            <AuthContextComponent>
                <App/>
            </AuthContextComponent>
        </Provider>
    ,document.getElementById('root')
);