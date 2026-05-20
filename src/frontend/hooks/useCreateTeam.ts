import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router'

type CreateTeamPayload = {
    name: string
    teamMember?: { name: string; surname: string; nickname?: string }[]
}

const createTeam = async (payload: CreateTeamPayload) => {
    const response = await fetch('http://localhost:3000/teams', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    })
    if (!response.ok) {
        const text = await response.text()
        throw new Error(text || `Server error: ${response.status}`)
    }
}

export const useCreateTeam = () => {
    const navigate = useNavigate()
    return useMutation({
        mutationFn: createTeam,
        onSuccess: () => navigate('/bracketGenerator'),
    })
}