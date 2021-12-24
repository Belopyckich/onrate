import React from 'react';
import style from "./MyInput.module.css";

const MyInput = ({children, ...props}) => {
    return (
        <input {...props} className={style.input}>
            {children}
        </input>
    );
};

export default MyInput;