import { useQuery } from '@tanstack/react-query'
import type { Team } from '../types'

const getTeams = async (): Promise<Team[]> => {
    const response = await fetch('http://localhost:3000/teams')
    if (!response.ok) throw new Error(`Server error: ${response.status}`)
    return response.json()
}

export const useTeams = () => {
    return useQuery<Team[]>({
        queryKey: ['teams'],
        queryFn: getTeams,
    })
}
