import { useMutation, useQueryClient } from '@tanstack/react-query'

const advanceRound = async (tournamentId: number, round: number) => {
    const response = await fetch(
        `http://localhost:3000/matches/advance/${tournamentId}/${round}`,
        {
            method: 'POST',
        }
    )
    if (!response.ok && response.status !== 422) {
        const text = await response.text()
        throw new Error(text || `Server error: ${response.status}`)
    }
    return response.json()
}

export const useAdvanceRound = (tournamentId: number) => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (round: number) => advanceRound(tournamentId, round),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['tournament', String(tournamentId)],
            })
        },
    })
}
