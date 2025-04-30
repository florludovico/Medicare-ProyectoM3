import styles from "./Login.module.css";
import { useFormik } from "formik";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { loginFormValidates } from "../../helpers/validates";
import { Link, useNavigate } from "react-router-dom";
import { UsersContext } from "../../context/UsersContext";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { loginUser } = useContext(UsersContext);

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validate: loginFormValidates,

    onSubmit: (values) => {
      loginUser(values)
        .then((res) => {
          if (res.status === 200)
            Swal.fire({
              icon: "success",
              title: "Usuario logueado correctamente",
            });

          navigate("/");
        })
        .catch((err) => {
          if (err.response) {
            const message =
              err.response.data?.data || err.response.data?.message || "";

            if (message.includes("Usuario o contrasena incorrecta")) {
              Swal.fire({
                icon: "error",
                title: "Usuario o contraseña incorrectos",
              });
            } else {
              Swal.fire({
                icon: "error",
                title: "Error en el servidor",
                text: message || "Error desconocido. Intenta de nuevo.",
              });
            }
          } else {
            Swal.fire({
              icon: "error",
              title: "Error de conexión",
              text: "No se pudo conectar al servidor. Intenta más tarde.",
            });
            console.error("Error de red:", err);
          }
        });
    },
  });

  return (
    <form className={styles.formContainer} onSubmit={formik.handleSubmit}>
      <h2 className={styles.formTitle}>Formulario de Login</h2>

      <div className={styles.formGroup}>
        <label className={styles.formLabel}>Usuario:</label>
        <input
          className={styles.formInput}
          type="text"
          name="username"
          placeholder="Tu nombre de usuario"
          onChange={formik.handleChange}
          value={formik.values.username}
        />
        <label className={styles.errorLabel}>
          {formik.errors.username ? formik.errors.username : ""}
        </label>
      </div>

      <div className={styles.formGroup}>
        <label className={styles.formLabel}>Password:</label>
        <div className={styles.passwordInputContainer}>
          <input
            className={styles.formInput}
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="*****"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <button
            type="button"
            className={styles.togglePasswordButton}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "🙈" : "👁️"}
          </button>
        </div>
        <label className={styles.errorLabel}>
          {formik.errors.password ? formik.errors.password : ""}
        </label>
      </div>

      <button
        className={styles.formButton}
        type="submit"
        disabled={
          Object.keys(formik.errors).length > 0 ||
          formik.errors.username ||
          formik.errors.password
        }
      >
        Submit
      </button>
      <br />
      <label>
        ¿Aun no tienes una cuenta? <Link to={"/register"}> Regístrate </Link>
      </label>
    </form>
  );
};

export default Login;
