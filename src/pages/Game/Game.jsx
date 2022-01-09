import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import style from "./Game.module.css";
import platformIcons from "../../image/platforms/platformIcons";
import esrbIcons from "../../image/esrb/esrbIcons";
import Slider from "../../components/Slider/Slider";
import parse from "html-react-parser";

const Game = () => {
  const games = useSelector((state) => state.games.games);
  const { slug } = useParams();
  const game = games.find((game) => game.slug === slug);
  const pc = game.platforms.find(
    (platform) =>
      platform.platform.slug === "pc" &&
      platform.requirements_en !== null &&
      typeof platform.requirements_en !== "undefined" && 
      slug !== "grand-theft-auto-v"
  );

  console.log(pc);

  return (
    <div className={style.game}>
      <div className={style.imageContainer}>
        <img
          src={game.background_image}
          className={style.backgroundImage}
          alt={`${game.name}_image`}
        />
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
              {game.parent_platforms.map((platform) => (
                <img
                  className={style.platform}
                  src={platformIcons[platform.platform.slug]}
                  key={platform.platform.id}
                  alt={platform.platform.slug}
                />
              ))}
            </div>
          </div>
        </div>
        <img
          className={style.esrb}
          src={esrbIcons.get(game.esrb_rating.slug)}
          alt="esrb rating"
        />
      </div>
      <Slider screenshots={game.short_screenshots} />
      {pc && (
        <div>
          {pc.requirements_en.minimum &&
            <div>{parse(pc.requirements_en.minimum)}</div>
          }
          {pc.requirements_en.recommended &&
            <div>{parse(pc.requirements_en?.recommended)}</div>
          }
        </div>
      )}
    </div>
  );
};

export default Game;
