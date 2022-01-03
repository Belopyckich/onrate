import reactDOM from "react-dom";
import { Provider } from "react-redux";
import App from './App';
import { store } from "./redux/store";
import './index.css';

reactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);