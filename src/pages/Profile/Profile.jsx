import React, { useContext, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AuthContext } from "../../context/AuthContextComponent";
import { ADD_PHOTO, REMOVE_PHOTO } from "../../redux/reducer/photoReducer";
import UserBlock from "../../components/UserBlock/UserBlock";
import { useParams } from "react-router-dom";
import style from "./Profile.module.css";
import MyButton from "../../components/UI/MyButton/MyButton";
import { api } from "../../api/api";
import ChangeInfoModal from "./ChangeInfoModal";

const Profile = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const { myProfile, setMyProfile } = useContext(AuthContext);
  const users = useSelector((state) => state.users.users);
  const friends = useSelector((state) => state.users.friends);
  const photos = useSelector((state) => state.photos.photos);
  const { username } = useParams();
  const profile = users.find((user) => user.login.username === username) || myProfile;

  useEffect(() => {
    console.log(photos);
  }, [photos])

  return isOpen ? (
    <ChangeInfoModal setIsOpen={setIsOpen} />
  ) : (
    <div className={style.profile}>
      <div className={style.container}>
        <div className={style.header}>PROFILE</div>
        <div className={style.info}>
          <div className={style.photoAndButtons}>
            <img
              className={style.photo}
              src={profile.picture?.large}
              alt={`${profile.login?.username}__picture`}
            />
            {profile === myProfile && (
              <div className={style.buttons}>
                <div className={style.manipulatePhotoButtons}>
                  <MyButton
                    onClick={async () => {
                      await api.fetchPhoto().then(photo => 
                        setMyProfile({
                          ...myProfile,
                          picture: { ...myProfile.picture, large: photo.url },
                        })
                      )
                    }}
                  >
                    CHANGE PHOTO
                  </MyButton>
                  <MyButton onClick={() => setIsOpen(!isOpen)}>
                    CHANGE INFO
                  </MyButton>
                </div>
                {photos.includes(myProfile.picture.large) ?
                  <MyButton onClick={() => dispatch({type: REMOVE_PHOTO, payload: myProfile.picture.large})}>REMOVE PHOTO FROM GALLERY</MyButton> 
                  :
                  <MyButton onClick={() => dispatch({type: ADD_PHOTO, payload: myProfile.picture.large})}>ADD PHOTO TO GALLERY</MyButton> 
                }
              </div>
            )}
          </div>
          <div className={style.properties}>
            <div className={style.property}>
              gender: {profile?.gender ? profile.gender : "null"}
            </div>
            <div className={style.property}>
              username:{" "}
              {profile.login?.username
                ? profile.login.username
                : "null"}
            </div>
            <div className={style.property}>
              name:{" "}
              {profile.name?.first && profile.name.last
                ? `${profile.name.first} ${profile.name.last}`
                : "null"}
            </div>
            <div className={style.property}>
              date: {profile.dob?.date ? profile.dob.date : "null"},
              age: {profile.dob?.age ? profile.dob.age : "null"},
            </div>
            <div className={style.property}>
              email: {profile?.email ? profile.email : "null"}
            </div>
            <div className={style.property}>
              phone: {profile?.phone ? profile.phone : "null"}
            </div>
            <div className={style.property}>
              registred{" "}
              {profile.registred?.date
                ? profile.registred.date
                : "null"}
            </div>
          </div>
        </div>
      </div>
      <div className={style.container}>
        <div className={style.header}>FRIENDS</div>
        <div className={style.info}>
          {friends.map((friend, index) => (
            <UserBlock user={friend} key={index} />
          ))}
        </div>
      </div>
      <div className={style.container}>
        <div className={style.header}>GAMES</div>
        <div className={style.info}></div>
      </div>
      <div className={style.container}>
        <div className={style.header}>FILMS</div>
        <div className={style.info}></div>
      </div>
    </div>
  );
};

export default Profile;
