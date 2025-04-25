import Styles from "./Turno.module.css"

function Turno({id, date, time, status}){

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
        </div>

    )
}

export default Turno