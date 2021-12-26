import { useContext, useState, useEffect } from 'react';
import {AuthContext} from "../../context/AuthContextComponent";
import style from "./Login.module.css";
import { api } from '../../api/api';
import { useDispatch } from 'react-redux';
import { getUsersThunk } from '../../redux/reducer/userReducer';
import Modal from "../../components/Modal/Modal";

const validation = {
    userName: {isEmpty: true, minLength: 3},
    password: {isEmpty: true, minLength: 3},
}

const logFields = [
    {key: "username", placeholder: "Введите имя пользователя" },
    {key: "password", placeholder: "Введите пароль" },
];

const Login = () => {
    const dispatch = useDispatch()
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const [errorCheck, setErrorCheck] = useState(false);
    const [logState, setLogState] = useState({
        username: { value: "", error: false, notActive: false,  key: "username" },
        password: { value: "", error: false, notActive: false, key: "password"},
    });

    const onSubmit = async event => {
        event.preventDefault();
        if (Object.entries(logState).find(input => input[1].error === true || input[1].value === "")) {
            setErrorCheck(true);
        } else {
            localStorage.setItem('auth', 'true');
            const user = {
                gender: null,
                name: {first: null, last: null},
                dob: {date: null, age: null},
                login: {username: logState.username.value},
                date: null,
                email: null,
                location: {
                    city: null,
                    state: null,
                    country: null,
                },
                phone: null,
                picture: {medium: null, large: null},
                registered: {date: null, age: null}
            }
            await api.getPhoto().then(photo => user.picture.large = photo.url);
            await dispatch(getUsersThunk());
            console.log(user);
            localStorage.setItem('user', JSON.stringify(user));
            setIsAuth(true);
        }
    }
    return (
        <div className={style.login}>
            <Modal
                action='Autorisation'
                validation={validation}
                fields={logFields}
                state={logState}
                setState={setLogState}
                buttonName='OPEN'
                onSubmit={onSubmit}
                errorCheck={errorCheck}
            />
        </div>
    );
};

export default Login;