import css from "./../styles/style.module.css";
import preloader from "../../images/icons/preloader.gif";

const Preloader = () => {
    return <div className={css.preloader_div}>
        <img src={preloader} className={css.preloader_img}/>
    </div>
}
export default Preloader;
