import React from 'react';
import Modal from "../../components/Modal/Modal";
import {ADD_INFO} from "../../redux/reducer/profileReducer";
  
  const fields = [
    { key: "gender", placeholder: "Enter gender" },
    { key: "firstname", placeholder: "Enter firstname" },
    { key: "lastname", placeholder: "Enter lastname" },
    { key: "date", placeholder: "Enter date" },
    { key: "age", placeholder: "Enter age" },
    { key: "email", placeholder: "Enter email" },
    { key: "phone", placeholder: "Enter phone" },
    { key: "city", placeholder: "Enter city" },
    { key: "state", placeholder: "Enter state" },
    { key: "country", placeholder: "Enter country" },
  ];

const ChangeInfoModal = ({setIsOpen}) => {
    return (
        <Modal
        header="Change Info"
        fields={fields}
        buttonName="Change"
        action={ADD_INFO}
      />
    );
};

export default ChangeInfoModal;