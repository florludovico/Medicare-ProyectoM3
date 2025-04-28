import Home from './views/Home/Home'
import styles from "./App.module.css"
import MisTurnos from './views/MisTurnos/MisTurnos'
import Login from './views/Login/Login'
import Register from './views/Register/Register'


function App() {
  

  return (
    <>
    <h1 className={styles.titulo}> Medicare 🩺</h1>
      <Home/>
      {/* <MisTurnos/> */}
      <Register/>
      <Login/>
    </>
  )
}

export default App
