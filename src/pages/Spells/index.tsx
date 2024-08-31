import { useContext } from "react"
import styles from "../../App.module.css"
import { SpellContext } from "../../context/SpellContext"
import { useParams } from "react-router-dom"
import SpellDetails from "../../components/SpellDetails"
import Header from "../../components/Header"
import Navbar from "../../components/Navbar"

export default function Spells() {
  const { index } = useParams()
  const { data } = useContext(SpellContext)

  const spells = data.find((spell) => spell.index === index)

  if (!spells) {
    return <div>Loading Spell ...</div>
  }

  return (
    <div className={styles.main}>
      <Navbar />
      <div className={styles.container}>
        <Header name={spells.name} />
        <SpellDetails url={spells.url} />
      </div>
    </div>
  )
}
