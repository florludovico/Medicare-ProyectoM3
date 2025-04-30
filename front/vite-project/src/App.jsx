import Home from "./views/Home/Home";
import styles from "./App.module.css";
import MisTurnos from "./views/MisTurnos/MisTurnos";
import Login from "./views/Login/Login";
import Register from "./views/Register/Register";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./components/NotFound/NotFound";

function App() {
  const [isLogged, setIsLogged] = useState();
  const [isNotFound, setIsNotFound] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setIsLogged(localStorage.getItem("user_id"));

    if (
      !isLogged &&
      location.pathname !== "/login" &&
      location.pathname !== "/register"
    ) {
      navigate("/login");
    }

    if (
      isLogged &&
      (location.pathname === "/login" || location.pathname === "/register")
    ) {
      navigate("/");
    }

    const validateRoutes = ["/", "/login", "/register", "/misturnos"];
    if (!validateRoutes.includes(location.pathname)) setIsNotFound(true);
    else setIsNotFound(false);
  }, [isLogged, navigate, location.pathname]);

  return (
    <>
      {!isLogged ? (
        <main className={styles.main}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
      ) : (
        <>
          {!isNotFound && (
            <header>
              <span> Logo</span>
              <Navbar />
            </header>
          )}

          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/misturnos" element={<MisTurnos />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </>
      )}
    </>
  );
}

export default App;
