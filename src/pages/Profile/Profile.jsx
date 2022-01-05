import { useSelector, useDispatch } from "react-redux";
import UserBlock from "../../components/UserBlock/UserBlock";
import { useParams } from "react-router-dom";
import style from "./Profile.module.css";
import MyButton from "../../components/UI/MyButton/MyButton";
import { rawgApi } from "../../api/api";
import {
  ADD_PHOTO_IN_ALBUM,
  REMOVE_PHOTO_FROM_ALBUM,
  FETCH_PROFILE_PHOTO,
} from "../../redux/reducer/profileReducer";
import { useHistory } from "react-router-dom";

const Profile = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const profile = useSelector((state) => state.profile);
  const { username } = useParams();
  const currentProfile = users.find(user => user.login.username === username) || profile;
  const isMyProfile = username === profile.login.username;

  rawgApi.fetchGamesByPage().then(data => console.log(data));

  return (
    <div className={style.profile}>
      <div className={style.container}>
        <div className={style.header}>PROFILE</div>
        <div className={style.info}>
          <div className={style.photoAndButtons}>
            <img
              className={style.photo}
              src={currentProfile.picture?.large}
              alt={`${currentProfile.login?.username}__picture`}
            />
            {isMyProfile && (
              <div className={style.buttons}>
                <div className={style.manipulatePhotoButtons}>
                  <MyButton
                    onClick={() => dispatch({ type: FETCH_PROFILE_PHOTO })}
                  >
                    CHANGE PHOTO
                  </MyButton>
                  <MyButton onClick={() => history.push('/onrate/changeInfo')}>
                    CHANGE INFO
                  </MyButton>
                </div>
                {profile.album.includes(profile.picture.large) ? (
                  <MyButton
                    onClick={() =>
                      dispatch({
                        type: REMOVE_PHOTO_FROM_ALBUM,
                        payload: profile.picture.large,
                      })
                    }
                  >
                    REMOVE PHOTO FROM GALLERY
                  </MyButton>
                ) : (
                  <MyButton
                    onClick={() =>
                      dispatch({
                        type: ADD_PHOTO_IN_ALBUM,
                        payload: profile.picture.large,
                      })
                    }
                  >
                    ADD PHOTO TO GALLERY
                  </MyButton>
                )}
              </div>
            )}
          </div>
          <div className={style.properties}>
            <div className={style.property}>gender: {currentProfile?.gender}</div>
            <div className={style.property}>username: {currentProfile.login?.username}</div>
            <div className={style.property}>name: {currentProfile.name?.first || currentProfile.name?.last}</div>
            <div className={style.property}>
              date: {currentProfile.dob?.date && ""}
              age: {currentProfile.dob?.age && ""}
            </div>
            <div className={style.property}>email: {currentProfile?.email}</div>
            <div className={style.property}>phone: {currentProfile?.phone}</div>
            <div className={style.property}>registered: {currentProfile.registered?.date}</div>
          </div>
        </div>
      </div>
      <div className={style.container}>
        <div className={style.header}>FRIENDS</div>
        <div className={style.info}>
            {currentProfile.friends.map((friend, index) => (
              <UserBlock user={friend} key={index} isCha/>
            ))
          }
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
