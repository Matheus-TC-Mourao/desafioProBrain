import React, { createContext, useEffect, useState } from "react"
import { Spell } from "../types/SpellType"
import { getSpells } from "../services/GetSpells"

interface SpellContextProps {
  data: Spell[]
  filter: string
  search: string
  setData: React.Dispatch<React.SetStateAction<Spell[]>>
  setFilter: React.Dispatch<React.SetStateAction<string>>
  setSearch: React.Dispatch<React.SetStateAction<string>>
}
const defualtValues: SpellContextProps = {
  data: [],
  filter: "All",
  search: "",
  setData: () => {},
  setFilter: () => {},
  setSearch: () => {},
}

export const SpellContext = createContext(defualtValues)

interface SpellProviderProps {
  children: React.ReactNode
}
export function SpellProvider({ children }: SpellProviderProps) {
  const [data, setData] = useState<Spell[]>(defualtValues.data)
  const [filter, setFilter] = useState<string>(defualtValues.filter)
  const [search, setSearch] = useState<string>(defualtValues.search)

  useEffect(() => {
    getSpells().then((data) => setData(data))
  }, [])

  const Values: SpellContextProps = {
    data,
    filter,
    search,
    setData,
    setFilter,
    setSearch,
  }
  return (
    <SpellContext.Provider value={Values}>{children}</SpellContext.Provider>
  )
}
