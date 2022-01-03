import MyValidInput from "../UI/MyInput/MyValidInput";
import MyButton from "../UI/MyButton/MyButton";
import style from "./Modal.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";

const Modal = ({ header, fields, buttonName, action }) => {
  const dispatch = useDispatch();
  const [state, setState] = useState({});
  const [isValid, setIsValid] = useState(true);

  const onSubmit = (event) => {
    event.preventDefault();
    if (Object.entries(state).find(input => input.isError === true && input.value === "")) {
      setIsValid(false);
    } else {
      setIsValid(true)
      let data = {};
      fields.forEach(element => data = {...data, [element.key]: state[element.key].value})
      dispatch({type: action, payload: data});
    }
  }

  return (
    <div className={style.modal}>
      <form className={style.form} onSubmit={onSubmit}>
        <div className={style.header}>{header}</div>
        {fields.map((field) => (
          <MyValidInput
            setState={setState}
            state={state}
            field={field}
            type={field.key}
            key={field.key}
            placeholder={field.placeholder}
          />
        ))}
        <MyButton isValid={isValid}>{buttonName}</MyButton>
      </form>
    </div>
  );
};

export default Modal;
