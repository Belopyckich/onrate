import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import style from "./Game.module.css";
import platformIcons from "../../image/platforms/platformIcons";
import esrbIcons from "../../image/esrb/esrbIcons";
import Slider from "../../components/Slider/Slider";
import ProgressBar from "../../components/UI/ProgressBar/ProgressBar";
import parse from "html-react-parser";
import MyButton from "../../components/UI/MyButton/MyButton";
import { ADD_GAME, REMOVE_GAME } from "../../redux/reducer/profileReducer";
import { useDispatch } from "react-redux";

const Game = () => {
  const dispatch = useDispatch();
  const games = useSelector((state) => state.games.games);
  const profileGames = useSelector(state => state.profile.games);
  const { slug } = useParams();
  const game = games.find((game) => game.slug === slug);
  const isLiked = profileGames.includes(game);
  const pc = game.platforms.find(
    (platform) =>
      platform.platform.slug === "pc" &&
      platform.requirements_en !== null &&
      typeof platform.requirements_en !== "undefined" &&
      slug !== "grand-theft-auto-v"
  );

  return (
    <div className={style.game}>
      <div className={style.imageContainer}>
        <img
          src={game.background_image}
          className={style.backgroundImage}
          alt={`${game.name}_image`}
        />
        <div className={style.info}>
          <div className={style.name}>{game.name}</div>
          <div className={style.stat}>
            <div className={style.title}>Rating</div>
            <div className={style.statValue}>{game.rating}/5</div>
          </div>
          <div className={style.stat}>
            <div className={style.title}>Top</div>
            <div className={style.statValue}>{game.rating_top}</div>
          </div>
          <div className={style.stat}>
            <div className={style.title}>Metacritic</div>
            <div className={style.statValue}>{game.metacritic}</div>
          </div>
          <div className={style.stat}>
            <div className={style.title}>Released</div>
            <div className={style.statValue}>{game.released}</div>
          </div>
          <div className={style.stat}>
            <div className={style.title}>Play Time</div>
            <div className={style.statValue}>{game.playtime} hours</div>
          </div>
          <div className={style.stat}>
            <div className={style.title}>Platform</div>
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
          <div className={style.stat}>
            <div className={style.title}>Genre</div>
            <div className={style.genres}>
              {game.genres.map((genre) => (
                <div className={style.genre} key={genre.name}>{genre.name}</div>
              ))}
            </div>
          </div>
          <MyButton onClick={() => isLiked ? dispatch({ type: REMOVE_GAME, payload: game }) : dispatch({ type: ADD_GAME, payload: game })}>{isLiked ? "REMOVE FROM FAVORITE" : "ADD TO FAVORITE"}</MyButton>
        </div>
        <img
          className={style.esrb}
          src={esrbIcons.get(game.esrb_rating.slug)}
          alt="esrb rating"
        />
      </div>
      <div className={style.section}>
        <div className={style.container}>
          <div className={style.title}>Tags</div>
          <div className={style.tags}>
            {game.tags.map(tag =>
              <MyButton key={tag.name} className={style.tag}>{tag.name.replace(/-/g, ' ').split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ')}</MyButton>
            )}
          </div>
        </div>
      </div>
      <div className={pc ? style.sliderAndRequirements : style.slider}>
        {pc && (
          <div className={style.requirements}>
            <div className={style.title}>Requirements</div>
            {pc.requirements_en.minimum &&
              <div className={style.requirement}>{parse(pc.requirements_en.minimum)}</div>
            }
            {pc.requirements_en.recommended &&
              <div className={style.requirement}>{parse(pc.requirements_en?.recommended)}</div>
            }
          </div>
        )}
        <Slider screenshots={game.short_screenshots} />
      </div>
      <div className={style.section}>
        <div className={style.container}>
          <div className={style.title}>Users Status</div>
          <div className={style.statusValues}>
            {Object.entries(game.added_by_status).map(genre =>
              <div className={style.statusBlock} key={genre[0]}>
                <div className={style.statusTitle}>{genre[0]}</div>
                <ProgressBar completed={Math.ceil(genre[1]/game.added * 100)} ></ProgressBar>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={style.section}>
        <div className={style.container}>
          <div className={style.title}>Reviews</div>
          <ProgressBar completed={Math.ceil((game.ratings[0].count + game.ratings[1].count) / game.reviews_count * 100)}></ProgressBar>
        </div>
      </div>
    </div>
  );
};

export default Game;
