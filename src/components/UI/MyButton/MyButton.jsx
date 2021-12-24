import React from 'react';
import style from './MyButton.module.css';

const MyButton = ({children, errorCheck, ...props}) => {

    return (
        <button {...props} className={errorCheck ? style.myBtnError + ' ' + style.myBtn : style.myBtn}>
            {children}
        </button>
    );
};

export default MyButton;