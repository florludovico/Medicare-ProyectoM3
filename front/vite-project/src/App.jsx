import Home from './views/Home/Home'
import styles from "./App.module.css"
import MisTurnos from './views/MisTurnos/MisTurnos'


function App() {
  

  return (
    <>
    <h1 className={styles.titulo}>FLORENCIA 🐼</h1>
      <Home/>
      <MisTurnos/>
    </>
  )
}

export default App
