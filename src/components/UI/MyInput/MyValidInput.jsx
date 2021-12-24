import React, { useState } from "react";
import myStyle from "./MyInput.module.css";

const MyValidInput = ({ children, onChange, keyData = {}, validation, onBlur, ...props }) => {
  const [message, setMessage] = useState("");

  const onChangeInput = (e) => {
    let fullMessage = "";
    for (const prop in validation) {
      switch (prop) {
        case "minLength":
          e.target.value.length < validation[prop] + 1
            ? fullMessage += `Введите больше ${validation[prop]} символов`
            : fullMessage += ""
          break;
        case "isEmpty":
          e.target.value
            ? fullMessage += ""
            : fullMessage += "\nПоле не должно быть пустым "
          break;
        default:
          break;
      }
    }
    if(fullMessage) {
      keyData.error = true;
    } else {
      keyData.error = false;
    }
    onChange(keyData.key, e.target.value, keyData.error);
    setMessage(fullMessage);
  };

  return (
    <div className={myStyle.myInputDiv}>
      <div className={(keyData.error && keyData.notActive)  ? myStyle.error : myStyle.disabled}>{message}</div>
      <input
        {...props}
        value={keyData.value}
        onChange={onChangeInput}
        onBlur={(e) => onBlur(keyData.key, e.target.value, keyData.error)}
        className={(keyData.error && keyData.notActive) ? myStyle.input + " " + myStyle.inputError : myStyle.input}
      >
        {children}
      </input>
    </div>
  );
};

export default MyValidInput;
