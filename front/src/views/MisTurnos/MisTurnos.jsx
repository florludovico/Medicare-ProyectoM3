import Turno from "../../components/Turnos/Turno"
import Styles from "./MisTurnos.module.css"
import  { useEffect,  useContext } from "react";
import { UsersContext } from "../../context/UsersContext";



function MisTurnos(){

 const { userAppointments, getUserAppointments, user } = useContext(UsersContext)

  useEffect(() =>{
    getUserAppointments(user)

  }, [user])

  return (
    <div className={Styles.contenedor}>
      <div className={Styles.contenedorH1}>
      <h1>Mis Turnos</h1>

      <div className={Styles.contenedorTurnos}>
        { userAppointments.length > 0 ? userAppointments.map(turno => {
            return (
                <Turno
                key={turno.id}
                id={turno.id}
                date={turno.date}
                time={turno.time}
                status={turno.status}
                
                />
            )
        }) : <h1>No hay turnos disponibles</h1>}

      </div>
      </div>
    </div>
    )
}

export default MisTurnos