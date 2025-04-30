import styles from "./Home.module.css"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UsersContext } from "../../context/UsersContext";

 


function Home (){
  const { name } = useContext(UsersContext);

    return(
      <>
        <div className={styles.background}>
        <div className={styles.homeContainer}>
        <h1 className={styles.titulo}>¡Bienvenido/a{name ? `, ${name}` : ""}!</h1>
        <p className={styles.welcomeMessage}> ¿Quieres agendar un nuevo turno hoy?</p>
        <Link to="/agendarturno" className={styles.linkWrapper}>
        <button className={styles.homeButton} type="button">
          Nuevo turno
        </button>
      </Link>
        </div>
        </div>

      </>
    )
}

export default Home