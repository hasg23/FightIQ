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
export { searchFighters }