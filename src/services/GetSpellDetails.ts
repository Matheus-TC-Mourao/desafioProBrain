export const fetchData = async (url: string) => {
  const URL = `https://www.dnd5eapi.co${url}`
  try {
    const res = await fetch(URL)
    if (!res.ok) throw new Error(`Response status: ${res.status}`)
    const json = await res.json()
    return json
  } catch (error) {
    console.log(error)
  }
}
