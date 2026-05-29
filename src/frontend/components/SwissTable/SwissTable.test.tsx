import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import SwissTable from '../SwissTable'
import type { Tournament } from '../../types'

const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
})

const wrap = (ui: React.ReactElement) => (
    <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>
)

const makeTournament = (): Tournament => ({
    id: 1,
    name: 'Swiss Cup',
    date: '2026-01-01T00:00:00.000Z',
    createdAt: '2026-01-01T00:00:00.000Z',
    formatId: 3,
    format: { id: 3, name: 'Swiss' },
    TournamentTeam: [
        { teamId: 1, team: { id: 1, name: 'Alpha' } },
        { teamId: 2, team: { id: 2, name: 'Beta' } },
        { teamId: 3, team: { id: 3, name: 'Gamma' } },
        { teamId: 4, team: { id: 4, name: 'Delta' } },
    ],
    Match: [
        {
            id: 1,
            tournamentId: 1,
            teamAId: 1,
            teamBId: 2,
            teamAScore: 2,
            teamBScore: 0,
            round: 1,
            played: true,
            teamA: { id: 1, name: 'Alpha' },
            teamB: { id: 2, name: 'Beta' },
        },
        {
            id: 2,
            tournamentId: 1,
            teamAId: 3,
            teamBId: 4,
            teamAScore: 1,
            teamBScore: 1,
            round: 1,
            played: true,
            teamA: { id: 3, name: 'Gamma' },
            teamB: { id: 4, name: 'Delta' },
        },
        {
            id: 3,
            tournamentId: 1,
            teamAId: 1,
            teamBId: 3,
            teamAScore: 0,
            teamBScore: 0,
            round: 2,
            played: false,
            teamA: { id: 1, name: 'Alpha' },
            teamB: { id: 3, name: 'Gamma' },
        },
    ],
})

describe('SwissTable', () => {
    it('renders the Standings heading', () => {
        render(wrap(<SwissTable tournament={makeTournament()} />))
        expect(screen.getByText('Standings')).toBeInTheDocument()
    })

    it('renders all team names in the standings', () => {
        render(wrap(<SwissTable tournament={makeTournament()} />))
        expect(screen.getAllByText('Alpha').length).toBeGreaterThanOrEqual(1)
        expect(screen.getAllByText('Beta').length).toBeGreaterThanOrEqual(1)
        expect(screen.getAllByText('Gamma').length).toBeGreaterThanOrEqual(1)
        expect(screen.getAllByText('Delta').length).toBeGreaterThanOrEqual(1)
    })

    it('renders a round tab for each played round', () => {
        render(wrap(<SwissTable tournament={makeTournament()} />))
        expect(screen.getByText('Round 1')).toBeInTheDocument()
        expect(screen.getByText('Round 2')).toBeInTheDocument()
    })

    it('shows the rounds-played counter', () => {
        render(wrap(<SwissTable tournament={makeTournament()} />))
        expect(screen.getByText('2 / 2 rounds played')).toBeInTheDocument()
    })

    it('defaults to showing the highest rounds matches', () => {
        render(wrap(<SwissTable tournament={makeTournament()} />))
        expect(screen.getByText('vs')).toBeInTheDocument()
    })

    it('switches to round 1 matches when the Round 1 tab is clicked', () => {
        render(wrap(<SwissTable tournament={makeTournament()} />))
        fireEvent.click(screen.getByText('Round 1'))
        expect(screen.getByText('2 : 0')).toBeInTheDocument()
    })

    it('shows the winner team name with a winner style in round 1', () => {
        render(wrap(<SwissTable tournament={makeTournament()} />))
        fireEvent.click(screen.getByText('Round 1'))
        const matchRows = screen.getAllByText('Alpha')
        expect(matchRows.length).toBeGreaterThanOrEqual(1)
    })

    it('shows a draw score in round 1 (1:1)', () => {
        render(wrap(<SwissTable tournament={makeTournament()} />))
        fireEvent.click(screen.getByText('Round 1'))
        expect(screen.getByText('1 : 1')).toBeInTheDocument()
    })

    it('opens the ChangeScore modal when a match row is clicked', () => {
        render(wrap(<SwissTable tournament={makeTournament()} />))
        fireEvent.click(screen.getByText('Round 1'))
        const matchRow = screen.getAllByText('Alpha')
            .map(el => el.closest('[class*="SwissMatch"]'))
            .find(el => el !== null) as HTMLElement
        fireEvent.click(matchRow)
        expect(screen.getByText('Update Score')).toBeInTheDocument()
    })

    it('closes the ChangeScore modal when Cancel is clicked', () => {
        render(wrap(<SwissTable tournament={makeTournament()} />))
        fireEvent.click(screen.getByText('Round 1'))
        const matchRow = screen.getAllByText('Alpha')
            .map(el => el.closest('[class*="SwissMatch"]'))
            .find(el => el !== null) as HTMLElement
        fireEvent.click(matchRow)
        fireEvent.click(screen.getByText('Cancel'))
        expect(screen.queryByText('Update Score')).not.toBeInTheDocument()
    })

    it('renders the standings columns (P, W, D, L, Pts)', () => {
        render(wrap(<SwissTable tournament={makeTournament()} />))
        expect(screen.getByTitle('Played')).toBeInTheDocument()
        expect(screen.getByTitle('Won')).toBeInTheDocument()
        expect(screen.getByTitle('Drawn')).toBeInTheDocument()
        expect(screen.getByTitle('Lost')).toBeInTheDocument()
        expect(screen.getByTitle('Points')).toBeInTheDocument()
    })

    it('renders an empty standings table when there are no matches', () => {
        const empty: Tournament = { ...makeTournament(), Match: [] }
        render(wrap(<SwissTable tournament={empty} />))
        expect(screen.getByText('Standings')).toBeInTheDocument()
        expect(screen.queryByText('Round 1')).not.toBeInTheDocument()
    })
})
