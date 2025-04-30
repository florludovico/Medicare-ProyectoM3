import { Link, useNavigate } from "react-router-dom";
import Styles from "./Navbar.module.css";
import Swal from "sweetalert2";

function Navbar() {
  const navigate = useNavigate();
  const handleLogOut = async () => {
    
   await Swal.fire({
      icon: "warning",
      title: "Tu sesion fue cerrada correctamente",
      timer: 2000,
      showConfirmButton: true,
    });
    localStorage.removeItem("user_id");
    navigate("/login");
  };

  return (
    <div className={Styles.navbarContainer}>
      <nav className={Styles.navbar}>
        <li className={Styles.navItem}>
          <Link
            to="/"
            className={`${Styles.navLink} ${
              location.pathname === "/" ? Styles.active : ""
            }`}
          >
            Home
          </Link>
        </li>
        <li className={Styles.navItem}>
          <Link
            to="/misturnos"
            className={`${Styles.navLink} ${
              location.pathname === "/misturnos" ? Styles.active : ""
            }`}
          >
            Mis Turnos
          </Link>
        </li>
        <li className={Styles.navItem}>
          <Link
            to="/login"
            className={`${Styles.navLink}`}
            onClick={handleLogOut}
          >
            Log Out
          </Link>
        </li>
      </nav>
    </div>
  );
}

export default Navbar;
