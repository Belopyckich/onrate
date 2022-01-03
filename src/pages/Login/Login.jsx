import Modal from "../../components/Modal/Modal";
import {SET_PROFILE} from "../../redux/reducer/profileReducer";

const fields = [
  { key: "username", placeholder: "Введите имя пользователя" },
  { key: "password", placeholder: "Введите пароль" },
];

const Login = () => {

  return (
    <Modal
      header="Autorisation"
      fields={fields}
      buttonName="OPEN"
      action={SET_PROFILE}
    />
  );
};

export default Login;
