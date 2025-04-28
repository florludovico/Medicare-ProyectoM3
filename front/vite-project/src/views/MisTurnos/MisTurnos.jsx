import Turno from "../../components/Turnos/Turno"
import Styles from "./MisTurnos.module.css"
import  { useEffect, useState } from "react";
import axios from "axios"



function MisTurnos(){

 const [turnos, setTurnos] = useState([])

  useEffect(() =>{
    axios.get("http://localhost:3000/appointments")
      .then((response) => {
        setTurnos(response.data.data);
      })
      .catch((err) =>{
        console.log(err);
      } )
  }, [])

  return (
    <div className={Styles.contenedor}>
      <div className={Styles.contenedorH1}>
      <h1>Mis Turnos🌼</h1>

      <div className={Styles.contenedorTurnos}>
        { turnos.length > 0 ? turnos.map(turno => {
            return (
                <Turno
                key={turno.id}
                id={turno.id}
                date={turno.date}
                time={turno.time}
                status={turno.status}
                // setTurnos={setTurnos}
                />
            )
        }) : <h1>No hay turnos disponibles</h1>}

      </div>
      </div>
    </div>
    )
}

export default MisTurnos