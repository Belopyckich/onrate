import style from "./Slider.module.css";

const Slider = ({images}) => {

    console.log(images);

    return (
        <div className={style.container}>
            {images.map(image => 
                <div key={image.id} className={style.slide}>
                    <img src={image.image} alt={`${image.id}screenshot`}/>
                </div>
            )}
        </div>
    )
}

export default Slider;