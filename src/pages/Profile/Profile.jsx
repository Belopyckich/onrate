import React, { useContext, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AuthContext } from '../../context/AuthContextComponent';
import { REMOVE_FRIEND } from '../../redux/reducer/userReducer';
import UserBlock from "../../components/UserBlock/UserBlock";
import { useParams } from 'react-router-dom';
import style from "./Profile.module.css";
import MyButton from '../../components/UI/MyButton/MyButton';
import { api } from '../../api/api';
import Modal from '../../components/Modal/Modal';

const validation = {
    gender: { isEmpty: false, minLength: 1 },
    firstname: { isEmpty: true, minLength: 2 },
    lastname: { isEmpty: true, minLength: 3 },
    date: { isEmpty: true, minLength: 1 },
    age: { isEmpty: true, minLength: 1 },
    email: { isEmpty: true, minLength: 1 },
    phone: { isEmpty: true, minLength: 2 },
    city: { isEmpty: true, minLength: 1 },
    state: { isEmpty: true, minLength: 1 },
    country: { isEmpty: true, minLength: 2 }
}



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


const Profile = () => {
    const [state, setState] = useState({
        gender: { value: "", error: false, notActive: false, key: "gender" },
        firstname: { value: "", error: false, notActive: false, key: "firstname" },
        lastname: { value: "", error: false, notActive: false, key: "lastname" },
        date: { value: "", error: false, notActive: false, key: "date" },
        age: { value: "", error: false, notActive: false, key: "age" },
        email: { value: "", error: false, notActive: false, key: "email" },
        phone: { value: "", error: false, notActive: false, key: "phone" },
        city: { value: "", error: false, notActive: false, key: "city" },
        state: { value: "", error: false, notActive: false, key: "state" },
        country: { value: "", error: false, notActive: false, key: "country" },
    });
    const [isOpen, setIsOpen] = useState(false);
    const [errorCheck, setErrorCheck] = useState(false);
    const { user, setUser } = useContext(AuthContext);
    const users = useSelector(state => state.users.users);
    const friends = useSelector(state => state.users.friends);
    const { profile } = useParams();
    const profileData = users.find(user => user.login.username === profile) || user;

    const onSubmit = async event => {
        event.preventDefault();
        if (Object.entries(state).find(input => input[1].error === true || input[1].value === "")) {
            setErrorCheck(true);
        } else {
            setUser({...user, 
                gender: state.gender,
                name: { first: state.firstname, last: state.lastname },
                dob: { date: state.date, age: state.age },
                login: { username: state.username },
                date: state.date,
                email: state.email,
                location: {
                    city: state.city,
                    state: state.state,
                    country: state.country,
                },
                phone: state.country
            });
            setIsOpen(false);
        }
    }

    return (
        <div className={style.profile}>
            {isOpen &&
                <div className={style.modal}>
                    <Modal
                        action='Change Info'
                        validation={validation}
                        fields={fields}
                        state={state}
                        setState={setState}
                        buttonName='Change'
                        onSubmit={onSubmit}
                        errorCheck={errorCheck}
                    />
                </div>
            }
            <div className={style.container}>
                <div className={style.header}>PROFILE</div>
                <div className={style.info}>
                    <div className={style.photoAndButtons}>
                        <img className={style.photo} src={profileData.picture?.large} alt={`${profileData.login?.username}__picture`} />
                        <div className={style.buttons}>
                            <MyButton onClick={async () => await api.getPhoto().then(photo => setUser({ ...user, picture: { ...user.picture, large: photo.url } }))}>CHANGE PHOTO</MyButton>
                            <MyButton onClick={() => setIsOpen(!isOpen)}>CHANGE INFO</MyButton>
                        </div>
                    </div>
                    <div className={style.properties}>
                        <div className={style.property}>gender: {profileData?.gender ? profileData.gender : 'null'}</div>
                        <div className={style.property}>user name: {profileData.login?.username ? profileData.login.username : 'null'}</div>
                        <div className={style.property}>name: {profileData.name?.first && profileData.name.last ? `${profileData.name.first} ${profileData.name.last}` : 'null'}</div>
                        <div className={style.property}>
                            date: {profileData.dob?.date ? profileData.dob.date : 'null'},
                            age: {profileData.dob?.age ? profileData.dob.age : 'null'},
                        </div>
                        <div className={style.property}>email: {profileData?.email ? profileData.email : 'null'}</div>
                        <div className={style.property}>phone: {profileData?.phone ? profileData.phone : 'null'}</div>
                        <div className={style.property}>registred {profileData.registred?.date ? profileData.registred.date : 'null'}</div>
                    </div>
                </div>
            </div>
            <div className={style.container}>
                <div className={style.header}>FRIENDS</div>
                <div className={style.info}></div>
            </div>
            <div className={style.container}>
                <div className={style.header}>GAMES</div>
                <div className={style.info}></div>
            </div>
            <div className={style.container}>
                <div className={style.header}>FILMS</div>
                <div className={style.info}></div>
            </div>


            {friends.map((friend, index) =>
                <UserBlock user={friend} actionType={REMOVE_FRIEND} key={index} />
            )}
        </div>
    )
};

export default Profile;