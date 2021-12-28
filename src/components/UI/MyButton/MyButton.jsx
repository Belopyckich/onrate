import React from 'react';
import style from './MyButton.module.css';

const MyButton = ({children, isValid = true, ...props}) => {

    return (
        <button {...props} className={isValid ? style.button : style.buttonError}>
            {children}
        </button>
    );
};

export default MyButton;