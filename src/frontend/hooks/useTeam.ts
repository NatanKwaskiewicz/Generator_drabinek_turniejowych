import { useQuery } from '@tanstack/react-query'
import type { Team } from '../types'

const getTeam = async (id: number): Promise<Team> => {
    const response = await fetch(`http://localhost:3000/teams/${id}`)
    if (!response.ok) throw new Error(`Server error: ${response.status}`)
    return response.json()
}

export const useTeam = (id: number | null) => {
    return useQuery<Team>({
        queryKey: ['team', id],
        queryFn: () => getTeam(id!),
        enabled: id !== null,
    })
}
