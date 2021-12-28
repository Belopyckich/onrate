import MyValidInput from "../UI/MyInput/MyValidInput";
import MyButton from "../UI/MyButton/MyButton";
import style from "./Modal.module.css";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContextComponent";

const Modal = ({ header, fields, buttonName, setIsOpen}) => {
  const { myProfile, setMyProfile } = useContext(AuthContext);
  const [isValid, setIsValid] = useState(true);
  const [state, setState] = useState({});

  const onSubmit = (event) => {
    event.preventDefault();
    if (Object.entries(state).find(input => input.isError === true && input.value === "")
    ) {
      setIsOpen(false);
      setIsValid(false);
    } else {
      setIsValid(true);
      setIsOpen(true);
      setMyProfile({
        ...myProfile,
        gender: state.gender?.value,
        login: {username: state.username?.value},
        name: { first: state.firstname?.value, last: state.lastname?.value },
        dob: { date: state.date?.value, age: state.age?.value },
        date: state.date?.value,
        email: state.email?.value,
        location: {
          city: state.city?.value,
          state: state.state?.value,
          country: state.country?.value,
        },
        phone: state.phone?.value,
      });
    }
  };

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
