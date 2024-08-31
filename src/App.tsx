import styles from "./App.module.css"
import { SpellProvider } from "./context/SpellContext"
import Router from "./routes"

function App() {
  return (
    <SpellProvider>
      <div className={styles.main}>
        <Router />
      </div>
    </SpellProvider>
  )
}

export default App
