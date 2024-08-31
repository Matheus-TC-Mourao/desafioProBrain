import { useContext } from "react"
import styles from "../../App.module.css"
import { SpellContext } from "../../context/SpellContext"
import Logo from "../../assets/iconD&D.png"
import { Link } from "react-router-dom"

interface NavbarProps {
  home?: boolean
}

export default function Navbar({ home }: NavbarProps) {
  const { filter, setFilter, setSearch } = useContext(SpellContext)

  const renderFilter = () => {
    return (
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className={styles.select}
      >
        <option value="All">All</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
      </select>
    )
  }

  const clearSearch = () => {
    setFilter("All")
  }

  return (
    <div className={styles.navbar}>
      <Link to={"/"}>
        <img src={Logo} alt="logo" onClick={() => clearSearch()} />
      </Link>
      <div className={styles.bar}>
        {home ? (
          <>
            <div className={styles.filter}>
              <span>Filter by level: </span>
              {renderFilter()}
            </div>
            <input
              className={styles.input}
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
          </>
        ) : (
          <Link to={"/"}>
            <button onClick={() => clearSearch()} className={styles.button}>
              Back home
            </button>
          </Link>
        )}
      </div>
    </div>
  )
}
