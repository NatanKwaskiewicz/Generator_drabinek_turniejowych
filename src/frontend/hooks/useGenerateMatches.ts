import { useMutation, useQueryClient } from '@tanstack/react-query'

export const generateMatches = async (tournamentId: number) => {
    const response = await fetch(
        `http://localhost:3000/matches/generate/${tournamentId}`,
        {
            method: 'POST',
        }
    )
    if (!response.ok) {
        const text = await response.text()
        throw new Error(text || `Server error: ${response.status}`)
    }
    return response.json()
}

export const useGenerateMatches = (tournamentId: number) => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: () => generateMatches(tournamentId),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['tournament', String(tournamentId)],
            })
        },
    })
}
