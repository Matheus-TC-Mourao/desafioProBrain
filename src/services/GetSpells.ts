export const getSpells = async () => {
  const url = "https://www.dnd5eapi.co/api/spells/"
  try {
    const res = await fetch(url)
    if (!res.ok) throw new Error(`Response status: ${res.status}`)
    const json = await res.json()
    return json.results
  } catch (error) {
    console.log(error)
  }
}
