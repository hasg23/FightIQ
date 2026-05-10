import type { Fighter } from "../types/Fighter"
async function searchFighters(search: string): Promise<Fighter[]> {

    const response = await fetch(`https://v1.mma.api-sports.io/fighters?search=${search}`, {
        headers:
        {
            'x-apisports-key': import.meta.env.VITE_FIGHT_IQ_API_KEY,
        }
    })
    const data = await response.json()

    return data.response
}
//se obtiene el peleador por id
async function getFighterById(id: string): Promise<Fighter> {
    const response = await fetch(`https://v1.mma.api-sports.io/fighters?id=${id}`, {
        headers:
        {
            'x-apisports-key': import.meta.env.VITE_FIGHT_IQ_API_KEY,
        }
    })
    const data = await response.json()
    return data.response[0]
}
//se obtienen los records de peleas del peleador por id
async function getFighterRecord(id: string) {
    const response = await fetch(`https://v1.mma.api-sports.io/fighters/records?id=${id}`, {
        headers:
        {
            'x-apisports-key': import.meta.env.VITE_FIGHT_IQ_API_KEY,
        }
    })
    const data = await response.json()
    return data.response[0]
}
export { searchFighters, getFighterById, getFighterRecord }