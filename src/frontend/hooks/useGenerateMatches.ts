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

export const generateRoundRobinMatches = async (tournamentId: number) => {
    const response = await fetch(
        `http://localhost:3000/matches/generate-round-robin/${tournamentId}`,
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

export const generateSwissMatches = async (tournamentId: number) => {
    const response = await fetch(
        `http://localhost:3000/matches/generate-swiss/${tournamentId}`,
        { method: 'POST' }
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

export const useGenerateRoundRobinMatches = (tournamentId: number) => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: () => generateRoundRobinMatches(tournamentId),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['tournament', String(tournamentId)],
            })
        },
    })
}

export const useGenerateSwissMatches = (tournamentId: number) => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: () => generateSwissMatches(tournamentId),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['tournament', String(tournamentId)],
            })
        },
    })
}
