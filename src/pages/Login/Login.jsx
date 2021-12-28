import { useContext } from "react";
import Modal from "../../components/Modal/Modal";
import { AuthContext } from "../../context/AuthContextComponent";

const fields = [
  { key: "username", placeholder: "Введите имя пользователя" },
  { key: "password", placeholder: "Введите пароль" },
];

const Login = () => {
  const { setIsAuth } = useContext(AuthContext);

  return (
    <Modal
      header="Autorisation"
      fields={fields}
      buttonName="OPEN"
      setIsOpen={setIsAuth}
    />
  );
};

export default Login;
