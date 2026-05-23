import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router'
import type { CreateTournamentPayload } from '../types'
import {
    generateMatches,
    generateRoundRobinMatches,
} from './useGenerateMatches.ts'

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
    return response.json()
}

export const useCreateTournament = () => {
    const navigate = useNavigate()
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: createTournament,
        onSuccess: async (data) => {
            if (data?.format?.name === 'Round Robin') {
                await generateRoundRobinMatches(data.id)
            } else {
                await generateMatches(data.id)
            }

            queryClient.invalidateQueries({ queryKey: ['tournaments'] })
            navigate(`/bracket/${data.id}`)
        },
    })
}
