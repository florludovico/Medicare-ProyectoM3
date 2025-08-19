import { useContext } from "react"
import Styles from "./Turno.module.css"
import { UsersContext } from "../../context/UsersContext"
import Swal from "sweetalert2"

function Turno({id, date, time, status}){

    const { cancelUserAppointment } = useContext (UsersContext)
    const handleCancel = async () =>{
        try{
            await cancelUserAppointment(id)
            Swal.fire({
                icon: "success",
                color: "red",
                title: "Turno cancelado con exito"
            })

        } catch (error){
            Swal.fire({
                icon: "error",
                title: "Error al cancelar el turno, intente nuevamente"
            })

        }
    }

    return (
        <div className={Styles.appointmenCard}>
            <div className={Styles.appointmentHeader}>
                <h3>Turno #{id}</h3>
                <span className={ status ==='active' ? Styles.statusActive : Styles.statusInactive }>{status}</span>
            </div>
            <div className={Styles.appointmentDetails}>
                <p><strong>Fecha:</strong> <span>{date}</span></p>
                <p><strong>Hora:</strong> <span>{time}</span></p>
            </div>
            <button className={`${Styles.cancelButton} ${status === "cancelled" ? Styles.disabled : ""}`} disabled={ status == 'cancelled'} onClick={handleCancel} 
            > Cancelar Turno</button>
        </div>

    )
}

export default Turno