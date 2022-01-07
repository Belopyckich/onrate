import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import style from "./Game.module.css";
import platformIcons from "../../image/platforms/platformIcons";
import esrbIcons from "../../image/esrb/esrbIcons";
import Slider from "../../components/Slider/Slider";

const Game = () => {
 const games = useSelector(state => state.games.games);
 const {slug} = useParams();
 const  game = games.find(game => game.slug === slug)


 return (
     <div className={style.game}>
         <div className={style.imageContainer}>
                <img src={game.background_image} className={style.backgroundImage} alt={`${game.name}_image`}/>
                <div className={style.mainInfo}>
                    <div className={style.name}>{game.name}</div>
                    <div className={style.stat}>
                        <div className={style.statTitle}>Rating</div>
                        <div className={style.statValue}>{game.rating}/5</div>
                    </div>
                    <div className={style.stat}>
                        <div className={style.statTitle}>Top</div>
                        <div className={style.statValue}>{game.rating_top}</div>
                    </div>
                    <div className={style.stat}>
                        <div className={style.statTitle}>Released</div>
                        <div className={style.statValue}>{game.released}</div>
                    </div>
                    <div className={style.stat}>
                        <div className={style.statTitle}>Metacritic</div>
                        <div className={style.statValue}>{game.metacritic}</div>
                    </div>
                    <div className={style.stat}>
                        <div className={style.statTitle}>Ratings count</div>
                        <div className={style.statValue}>{game.ratings_count}</div>
                    </div>
                    <div className={style.stat}>
                        <div className={style.statTitle}>Reviews count</div>
                        <div className={style.statValue}>{game.reviews_count}</div>
                    </div>
                    <div className={style.stat}>
                        <div className={style.statTitle}>Platform</div>
                        <div className={style.platforms}>
                        {game.parent_platforms.map(platform =>
                            <img className={style.platform} src={platformIcons[platform.platform.slug]} key={platform.platform.id} />
                        )}
                        </div>
                    </div>
                </div>
                <img className={style.esrb} src={esrbIcons[game.esrb_rating.slug]} alt="esrb rating"/>
         </div>
         <Slider images={game.short_screenshots}/>
     </div>
 )
}

export default Game;