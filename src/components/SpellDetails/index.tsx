import { useEffect, useState } from "react"
import styles from "../../App.module.css"
import { fetchData } from "../../services/GetSpellDetails"

interface SpellDetailsProps {
  url: string
}

export default function SpellDetails({ url }: SpellDetailsProps) {
  const [spell, setSpell] = useState<any>()

  useEffect(() => {
    fetchData(url).then((res) => setSpell(res))
  }, [url, setSpell])

  const components = () => {
    const comp = spell.components

    return comp.reduce((acum: string, i: string) => acum + ", " + i)
  }

  const handleObj = (Obj: string[]) => {
    const res = Obj.map((classe: any) => classe.name)

    return res.reduce((acum: string, i: string) => acum + ", " + i)
  }

  if (!spell) {
    return <div>Loading Details...</div>
  }

  return (
    <div className={styles.details}>
      <div className={styles.desc}>
        <span>Level:</span>
        <p>{spell.level}</p>
      </div>
      <div className={styles.desc}>
        <span>Description: </span>
        <div>
          <p>{spell.desc}</p>
        </div>
      </div>
      {spell.higher_level === 0 && (
        <div className={styles.desc}>
          <span>High level: </span>
          <div>
            <p>{spell.higher_level}</p>
          </div>
        </div>
      )}
      <div className={styles.desc}>
        <span>Range:</span>
        <p>{spell.range}</p>
      </div>
      <div className={styles.desc}>
        <span>Components:</span>
        <p>{components()}</p>
      </div>
      {spell.material && (
        <div className={styles.desc}>
          <span>Material:</span>
          <div>
            <p>{spell.material}</p>
          </div>
        </div>
      )}
      <div className={styles.desc}>
        <span>Ritual:</span>
        <p>{spell.ritual ? "Yes" : "No"}</p>
      </div>
      <div className={styles.desc}>
        <span>Duration:</span>
        <p>{spell.duration}</p>
      </div>
      <div className={styles.desc}>
        <span>Concentration:</span>
        <p>{spell.concentration ? "Yes" : "No"}</p>
      </div>
      {spell.attack_type && (
        <div className={styles.desc}>
          <span>Attack type:</span>
          <p>{spell.attack_type}</p>
        </div>
      )}
      {spell.damage === 0 && (
        <div className={styles.desc}>
          <span>Damage:</span>
          <p>{spell.damage.damage_type.name}</p>
        </div>
      )}
      {spell.dc?.dc_type.name && (
        <div className={styles.desc}>
          <span>Dc:</span>
          <p>{spell.dc.dc_type.name}</p>
        </div>
      )}
      <div className={styles.desc}>
        <span>School:</span>
        <p>{spell.school.name}</p>
      </div>
      <div className={styles.desc}>
        <span>Classes:</span>
        <p>{handleObj(spell.classes)}</p>
      </div>
      {spell.subclasses === 0 && (
        <div className={styles.desc}>
          <span>Subclasses:</span>
          <p>{handleObj(spell.subclasses)}</p>
        </div>
      )}
    </div>
  )
}
