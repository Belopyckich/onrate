import { useSelector } from 'react-redux';
import GameBlock from "../../components/GameBlock/GameBlock";
import style from "./Games.module.css";

const Games = () => {
    const games = useSelector(state => state.games.games);
    
    return (
        <div className={style.main}>
            <div className={style.users}>
                {games.map(game =>
                    <GameBlock game={game} key={game.id}/>
                )}
            </div>
        </div>
    );
};

export default Games;