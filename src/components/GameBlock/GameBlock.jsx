import React, {useState} from 'react';
import style from "./GameBlock.module.css";
import { useDispatch, useSelector } from 'react-redux';
import {ADD_FRIEND, REMOVE_FRIEND} from "../../redux/reducer/profileReducer";
import MyButton from "../UI/MyButton/MyButton";
import { useHistory } from 'react-router-dom';

const GameBlock = ({game, ...props}) => {
    const dispatch = useDispatch();
    const [onFocus, setOnFocus] = useState(false);
    const profileGames = useSelector(state => state.profile.games);
    const history = useHistory(); 

    return (
        <div className={style.game} {...props}>
            <div className={style.container} {...props} onMouseEnter={() => setOnFocus(true)} onMouseLeave={() => setOnFocus(false)}>
                <img className={onFocus ?  style.imageOnFocus : style.image} src={game.background_image} alt={game.background_image}/>
                <div className={style.likesContainer}>
                    <div>+</div>
                    <div className={style.likes}>{game.added}</div>
                </div>
                {onFocus &&
                    <div className={style.title}>{game.name}</div>
                }
                {/* <div className={style.platforms}>
                    {game.platforms.map(platform =>
                            <img className={style.platformIcon} key={platform.platform.name} src={platform.platform.image_background} alt={platform.platform.name}/>
                    )}
                </div> */}
                {/* <div className={style.userText}>
                    <div className={style.name}>{game.name}</div>
                    <div className={style.email}>{game.added}</div>
                    {game['parent_platforms'].map(platform =>
                        <div key={platform.name}>{platform.name}</div>
                    )}
                    <div>{game.rating}</div>
                    <div className={style.email}>{game.rating}</div>
                </div> */}
            </div>
            {/* <div className={style.userButtons}>
                {profileGames.includes(game) ?
                        <MyButton onClick={() => dispatch({type: REMOVE_FRIEND, payload: game})}>REMOVE FRIEND</MyButton>
                        :
                        <MyButton onClick={() => dispatch({type: ADD_FRIEND, payload: game})}>ADD FRIEND</MyButton>
                }
                <MyButton onClick={() => history.push(`/onrate/info`)}>OPEN PROFILE</MyButton>
            </div> */}
        </div>
    );
};

export default GameBlock;