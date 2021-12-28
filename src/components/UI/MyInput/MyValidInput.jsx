import React, { useState, useEffect } from "react";
import style from "./MyInput.module.css";
import { validate } from "../../../constants/validation";

const MyValidInput = ({ setState, state, field, ...props }) => {
  const [message, setMessage] = useState([]);

  const onChange = (e) => {
    validate(e.target.value, setMessage, field.key);
    setState({
      ...state,
      [field.key]: {
        ...state[field.key],
        value: e.target.value,
        isError: message ? false : true,
        isActive: true,
        key: e.target.key,
      },
    });
  };

  const onBlur = (e) => {
    setState({
      ...state,
      [field.key]: {
        ...state[field.key],
        value: e.target.value,
        isActive: false,
        key: field.key,
      },
    });
  };

  return (
    <div className={style.container}>
      <div style={(field?.isError && field?.isActive) && {display: 'none'}} className={style.message}>
        {message.map(error => 
          <div key={error}>{error}</div>
        )}
      </div>
      <input
        {...props}
        value={field?.value}
        onChange={onChange}
        onBlur={onBlur}
        className={(field?.isError && field?.isActive) ? style.input : style.inputError}
      ></input>
    </div>
  );
};

export default MyValidInput;
