import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import type { Tournament } from '../types'

const getTournaments = async (): Promise<Tournament[]> => {
    const response = await fetch('http://localhost:3000/tournaments')
    if (!response.ok) throw new Error(`Server error: ${response.status}`)
    return response.json()
}

const deleteTournament = async (id: number) => {
    const response = await fetch(`http://localhost:3000/tournaments/${id}`, {
        method: 'DELETE',
    })
    if (!response.ok) throw new Error(`Server error: ${response.status}`)
}

export const useTournaments = () => {
    return useQuery<Tournament[]>({
        queryKey: ['tournaments'],
        queryFn: getTournaments,
    })
}

export const useDeleteTournament = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: deleteTournament,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['tournaments'] }),
    })
}