import { Link } from "react-router-dom";
import styles from './NotFound.module.css';
import errorImage from '../image/homero.jpg';

function NotFound() {
    return (
        <div className={styles.continer404}>
            <img src={errorImage} alt="homero" className={styles.errorImage} />
            <h1 className={styles.title404}>404 ERROR</h1>
            <p className={styles.message}>Lo sentimos, la página solicitada no pudo ser encontrada 🔎</p>
            <Link to="/" className={styles.homeButton404}>
            Volver al Home 
            </Link>
        </div>
    );

}

export default NotFound;