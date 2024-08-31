import styles from "../../App.module.css"

interface headerProps {
  name?: string
}

export default function Header({ name }: headerProps) {
  return (
    <div className={styles.container}>
      <div className={styles.center}>
        <h1>{name ? name : "Desafio ProBrain"}</h1>
      </div>
    </div>
  )
}
