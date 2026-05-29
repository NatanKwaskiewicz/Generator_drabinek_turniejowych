import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import BracketContainer from '../BracketContainer'
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

const baseMatch = {
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
}

const makeElim = (matchOverrides = {}): Tournament => ({
    id: 1,
    name: 'Test Cup',
    date: '2026-01-01T00:00:00.000Z',
    createdAt: '2026-01-01T00:00:00.000Z',
    formatId: 1,
    format: { id: 1, name: 'Single elimination' },
    TournamentTeam: baseTeams,
    Match: [{ ...baseMatch, ...matchOverrides }],
})

const makeRR = (): Tournament => ({
    ...makeElim(),
    format: { id: 2, name: 'Round Robin' },
})

const makeSwiss = (): Tournament => ({
    ...makeElim(),
    format: { id: 3, name: 'Swiss' },
})

describe('BracketContainer', () => {
    it('renders the tournament name as a heading', () => {
        render(wrap(<BracketContainer tournament={makeElim()} />))
        expect(screen.getByText('Test Cup')).toBeInTheDocument()
    })

    it('renders the BracketSettings panel alongside the bracket', () => {
        render(wrap(<BracketContainer tournament={makeElim()} />))
        expect(screen.getByText('Tournament name')).toBeInTheDocument()
    })

    it('renders team names for an elimination bracket', () => {
        render(wrap(<BracketContainer tournament={makeElim()} />))
        expect(screen.getByText('Alpha')).toBeInTheDocument()
        expect(screen.getByText('Beta')).toBeInTheDocument()
    })

    it('shows "Final round" when the elimination bracket is down to 1 match and it is played', () => {
        const tournament = makeElim({ played: true })
        render(wrap(<BracketContainer tournament={tournament} />))
        expect(screen.getByText('Final round')).toBeInTheDocument()
    })

    it('shows the Standings table for Round Robin format', () => {
        render(wrap(<BracketContainer tournament={makeRR()} />))
        expect(screen.getByText('Standings')).toBeInTheDocument()
    })

    it('shows Leg 1 / Leg 2 toggle buttons for Round Robin format', () => {
        render(wrap(<BracketContainer tournament={makeRR()} />))
        expect(
            screen.getByRole('button', { name: 'Leg 1' })
        ).toBeInTheDocument()
        expect(
            screen.getByRole('button', { name: 'Leg 2' })
        ).toBeInTheDocument()
    })

    it('does not show Leg buttons for elimination format', () => {
        render(wrap(<BracketContainer tournament={makeElim()} />))
        expect(
            screen.queryByRole('button', { name: 'Leg 1' })
        ).not.toBeInTheDocument()
    })

    it('shows the Standings table for Swiss format', () => {
        render(wrap(<BracketContainer tournament={makeSwiss()} />))
        expect(screen.getByText('Standings')).toBeInTheDocument()
    })

    it('shows Swiss advance button for Swiss format', () => {
        render(wrap(<BracketContainer tournament={makeSwiss()} />))
        expect(screen.getByText('Advance to Round 2')).toBeInTheDocument()
    })

    it('switching leg via Leg 2 button does not crash', () => {
        render(wrap(<BracketContainer tournament={makeRR()} />))
        fireEvent.click(screen.getByRole('button', { name: 'Leg 2' }))
        expect(screen.getByText('Standings')).toBeInTheDocument()
    })
})
