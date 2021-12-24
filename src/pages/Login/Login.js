import { useContext, useState } from 'react';
import {AuthContext} from "../../context/AuthContextComponent";
import style from "./Login.module.css";
import MyValidInput from "../../components/UI/MyInput/MyValidInput";
import MyButton from "../../components/UI/MyButton/MyButton";

const validation = {
    userName: {isEmpty: true, minLength: 3},
    password: {isEmpty: true, minLength: 3},
}

const logFields = [
    {key: "userName", placeholder: "Введите имя пользователя" },
    {key: "password", placeholder: "Введите пароль" },
];

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const [errorCheck, setErrorCheck] = useState(false);
    const [logState, setLogState] = useState({
        userName: { value: "", error: false, notActive: false,  key: "userName" },
        password: { value: "", error: false, notActive: false, key: "password"},
    });

    const onChange = (key, value, error) => {
        setLogState({...logState, [key]: {value: value, error: error, notActive: false, key: key}})
    };
    
    const onBlur = (key, value, error) => {
        setLogState({...logState, [key]: {value: value, error: error, notActive: true, key: key}});
    }

    const onClick = event => {
        event.preventDefault();
        if (Object.entries(logState).find(input => input[1].error === true || input[1].value === "")) {
            setErrorCheck(true);
            localStorage.setItem('auth', 'true');
            localStorage.setItem('user', logState.userName.toUpperCase());
        } else {
            setIsAuth(true);
        }
    }
    return (
        <div className={style.loginWrapper}>
            <form className={style.loginWindow}>
                <div className={style.header}>Авторизация</div>
                {logFields.map(field => 
                    <MyValidInput
                    type={field.key}
                    validation={validation[field.key]}
                    keyData={logState[field.key]}
                    key={field.key}
                    onChange={onChange}
                    onBlur={onBlur}
                    placeholder={field.placeholder}/>
                )}
                <MyButton errorCheck={errorCheck} onClick={onClick}>Войти на сайт</MyButton>
            </form>
        </div>
    );
};

export default Login;