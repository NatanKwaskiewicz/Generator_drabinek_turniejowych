import { useQuery } from '@tanstack/react-query'
import type { Tournament } from '../types'

const getTournament = async (id: string | undefined): Promise<Tournament> => {
    const response: Response = await fetch(
        `http://localhost:3000/tournaments/${id}`
    )
    if (!response.ok) throw new Error(`Server error: ${response.status}`)
    return response.json()
}

export const useTournament = (id: string | undefined) => {
    return useQuery<Tournament>({
        queryKey: ['tournament', id],
        queryFn: () => getTournament(id),
        enabled: !!id,
    })
}
