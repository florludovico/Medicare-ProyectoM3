import styles from "./Login.module.css";
import { useFormik } from "formik";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { loginFormValidates } from "../../helpers/validates";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validate: loginFormValidates,

    onSubmit: (values) => {
      axios
        .post("http://localhost:3000/users/login", values)
        .then((res) => {
            console.log(res.data.user.id);
            localStorage.setItem("user_id", res.data.user.id)

          if (res.status === 200)
            Swal.fire({
              icon: "success",
              title: "Usuario logueado correctamente",
            });
        })
        .catch((err) => {
          
          if (
            err.response.data.data.includes("Usuario o contrasena incorrecta")
          )
            Swal.fire({
              icon: "error",
              title: "Usuario o contraseña incorrecto",
            });
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
        disabled={!formik.values.username || !formik.values.password}
      >
        Submit
      </button>
    </form>
  );
};

export default Login;
