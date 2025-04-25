import Turno from "../../components/Turnos/Turno"
import myAppointments from "../../helpers/myAppointments"
import Styles from "./MisTurnos.module.css"
import React, { useState } from "react";



function MisTurnos(){

 const [turnos, setTurnos] = useState(myAppointments)

  return (
    <div className={Styles.contenedor}>
      <div className={Styles.contenedorH1}>
      <h1>Mis Turnos</h1>

      <div className={Styles.contenedorTurnos}>
        { turnos.length > 0 ? turnos.map(turno => {
            return (
                <Turno
                key={turno.id}
                id={turno.id}
                date={turno.date}
                time={turno.time}
                status={turno.status}
                setTurnos={setTurnos}
                />
            )
        }) : <h1>No hay turnos disponibles</h1>}

      </div>
      </div>
    </div>
    )
}

export default MisTurnos