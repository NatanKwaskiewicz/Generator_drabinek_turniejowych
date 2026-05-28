import React from 'react'
import { render, screen } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Bracket from '../Bracket'
import type { Tournament } from '../../types'

const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
})

const wrap = (ui: React.ReactElement) => (
    <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>
)

const baseTeams = [
    { teamId: 1, team: { id: 1, name: 'Alpha' } },
    { teamId: 2, team: { id: 2, name: 'Beta' } },
]

const makeElim = (): Tournament => ({
    id: 1,
    name: 'Elim Cup',
    date: '2026-01-01T00:00:00.000Z',
    createdAt: '2026-01-01T00:00:00.000Z',
    formatId: 1,
    format: { id: 1, name: 'Single elimination' },
    TournamentTeam: baseTeams,
    Match: [
        {
            id: 1,
            tournamentId: 1,
            teamAId: 1,
            teamBId: 2,
            teamAScore: 0,
            teamBScore: 0,
            round: 1,
            played: false,
            teamA: { id: 1, name: 'Alpha' },
            teamB: { id: 2, name: 'Beta' },
        },
    ],
})

const makeRR = (): Tournament => ({
    ...makeElim(),
    format: { id: 2, name: 'Round Robin' },
})

const makeSwiss = (): Tournament => ({
    ...makeElim(),
    format: { id: 3, name: 'Swiss' },
})

describe('Bracket', () => {
    it('renders team names for an elimination bracket', () => {
        render(wrap(<Bracket tournament={makeElim()} />))
        expect(screen.getByText('Alpha')).toBeInTheDocument()
        expect(screen.getByText('Beta')).toBeInTheDocument()
    })

    it('renders the Standings table for Round Robin format', () => {
        render(wrap(<Bracket tournament={makeRR()} />))
        expect(screen.getByText('Standings')).toBeInTheDocument()
    })

    it('renders the Standings table for Swiss format', () => {
        render(wrap(<Bracket tournament={makeSwiss()} />))
        expect(screen.getByText('Standings')).toBeInTheDocument()
    })

    it('does not render the Round Robin table for elimination format', () => {
        render(wrap(<Bracket tournament={makeElim()} />))
        expect(screen.queryByText('Leg 1')).not.toBeInTheDocument()
    })
})
