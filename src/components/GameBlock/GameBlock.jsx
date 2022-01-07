import React, { useState } from 'react';
import style from "./GameBlock.module.css";
import { useDispatch, useSelector } from 'react-redux';
import plus from "../../image/plus.svg";
import minus from "../../image/minus.svg";
import platformIcons from "../../image/platforms/platformIcons";
import { ADD_GAME, REMOVE_GAME } from "../../redux/reducer/profileReducer";
import MyButton from "../UI/MyButton/MyButton";
import { useHistory } from 'react-router-dom';

const GameBlock = ({ game, ...props }) => {
    const dispatch = useDispatch();
    const [onFocus, setOnFocus] = useState(false);
    const profileGames = useSelector(state => state.profile.games);
    const history = useHistory();
    const isLiked = profileGames.includes(game);

    const onClick = (e) => {
        e.stopPropagation();
        isLiked ? dispatch({ type: REMOVE_GAME, payload: game }) : dispatch({ type: ADD_GAME, payload: game })
    }

    return (
        <div className={style.game} {...props}>
            <div className={style.container} {...props} onMouseEnter={() => setOnFocus(true)} onMouseLeave={() => setOnFocus(false)} onClick={() => history.push(`/onrate/games/${game.slug}`)}>
                <img className={onFocus ? style.imageOnFocus : style.image} src={game.background_image} alt={game.background_image} />
                <div className={style.likesContainer} onClick={onClick}>
                    <img className={style.likeIcon} src={isLiked ? minus : plus} alt={isLiked ? "minus" : "plus"} />
                    <div className={style.likes}>{isLiked ? game.added + 1 : game.added}</div>
                </div>
                {onFocus &&
                    <div className={style.platforms}>
                        {game.parent_platforms.map(platform =>
                            <img className={style.platform} src={platformIcons[platform.platform.slug]} key={platform.platform.id} />
                        )}
                    </div>
                }
                {onFocus && <div className={style.title}>{game.name}</div>}
            </div>
        </div>
    );
};

export default GameBlock;