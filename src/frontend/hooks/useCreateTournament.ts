import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router'
import type { CreateTournamentPayload } from '../types'

const createTournament = async (payload: CreateTournamentPayload) => {
    const response = await fetch('http://localhost:3000/tournaments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    })
    if (!response.ok) {
        const text = await response.text()
        throw new Error(text || `Server error: ${response.status}`)
    }
}

export const useCreateTournament = () => {
    const navigate = useNavigate()
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: createTournament,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['tournaments'] })
            navigate('/bracketPage')
        },
    })
}
