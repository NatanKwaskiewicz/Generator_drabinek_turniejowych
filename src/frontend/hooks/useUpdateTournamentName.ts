import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { UpdateTournamentPayload } from '../types'

const updateTournamentName = async ({ id, name }: UpdateTournamentPayload) => {
    const response = await fetch(`http://localhost:3000/tournaments/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
    })

    if (!response.ok) {
        throw new Error('Failed to update tournament')
    }

    return response.json()
}

export const useUpdateTournamentName = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: updateTournamentName,

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['tournament'],
            })

            queryClient.invalidateQueries({
                queryKey: ['tournaments'],
            })
        },
    })
}
