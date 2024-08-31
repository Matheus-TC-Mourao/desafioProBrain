import { useContext } from "react"
import styles from "../../App.module.css"
import { Link } from "react-router-dom"
import { Spell } from "../../types/SpellType"
import { SpellContext } from "../../context/SpellContext"
import Header from "../../components/Header"
import Navbar from "../../components/Navbar"

export default function Home() {
  const { data, filter, search } = useContext(SpellContext)

  const handleFilter = (spell: Spell) => {
    switch (filter) {
      case "All":
        return true
      case "1":
        return spell.level === 1
      case "2":
        return spell.level === 2
      case "3":
        return spell.level === 3
      case "4":
        return spell.level === 4
      case "5":
        return spell.level === 5
      case "6":
        return spell.level === 6
      case "7":
        return spell.level === 7
      case "8":
        return spell.level === 8
      case "9":
        return spell.level === 9
    }
  }

  return (
    <main className={styles.main}>
      <Navbar home />
      <div className={styles.container}>
        <Header />
        <div className={styles.grid}>
          {data
            .filter(handleFilter)
            .filter((spell) =>
              search.toLowerCase() === ""
                ? spell
                : spell.name.toLowerCase().includes(search)
            )
            .map((spell) => (
              <Link to={`/spells/${spell.index}`} key={spell.index}>
                <div className={styles.card} key={spell.index}>
                  <span>{spell.name}</span>
                  <p>Level: {spell.level}</p>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </main>
  )
}
