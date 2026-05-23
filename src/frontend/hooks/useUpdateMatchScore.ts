import { useMutation, useQueryClient } from '@tanstack/react-query'

const updateMatchScore = async (
    matchId: number,
    teamAScore: number,
    teamBScore: number
) => {
    const response = await fetch(`http://localhost:3000/matches/${matchId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ teamAScore, teamBScore }),
    })
    if (!response.ok) {
        const text = await response.text()
        throw new Error(text || `Server error: ${response.status}`)
    }
    return response.json()
}

export const useUpdateMatchScore = (tournamentId: number) => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: ({
            matchId,
            teamAScore,
            teamBScore,
        }: {
            matchId: number
            teamAScore: number
            teamBScore: number
        }) => updateMatchScore(matchId, teamAScore, teamBScore),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['tournament', String(tournamentId)],
            })
        },
    })
}
