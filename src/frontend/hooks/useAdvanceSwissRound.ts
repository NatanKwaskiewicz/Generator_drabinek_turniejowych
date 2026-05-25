import { useMutation, useQueryClient } from '@tanstack/react-query'

const advanceSwissRound = async (tournamentId: number, round: number) => {
    const response = await fetch(
        `http://localhost:3000/matches/advance-swiss/${tournamentId}/${round}`,
        { method: 'POST' }
    )
    if (!response.ok) {
        const text = await response.text()
        throw new Error(text || `Server error: ${response.status}`)
    }
    return response.json()
}

export const useAdvanceSwissRound = (tournamentId: number) => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (round: number) => advanceSwissRound(tournamentId, round),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['tournament', String(tournamentId)],
            })
        },
    })
}
