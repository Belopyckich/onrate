import React from "react";
import style from "./Album.module.css";
import { REMOVE_PHOTO } from "../../redux/reducer/photoReducer";
import { useSelector, useDispatch } from "react-redux";
import MyButton from "../../components/UI/MyButton/MyButton";
import loop from "../../image/loop.svg";

const Album = () => {
  const dispatch = useDispatch();
  const album = useSelector((state) => state.photos.photos);

  return (
    <div className={style.album}>
      <div className={style.container}>
        <div className={style.header}>ALBUM</div>
        {album.length !== 0 ? (
          <div className={style.photos}>
            {album.map((photo, index) => (
              <div className={style.wrapper} key={photo}>
                <img src={photo} className={style.img} alt={`${index}`} />
                <MyButton
                  onClick={() =>
                    dispatch({ type: REMOVE_PHOTO, payload: photo })
                  }
                >
                  Delete photo
                </MyButton>
              </div>
            ))}
          </div>
        ) : (
          <div className={style.error}>
              <img src={loop} className={style.loop} alt="loop"/>
              <div className={style.errorText}>NO PHOTOS FOUND</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Album;
