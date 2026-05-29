import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import RoundRobinTable from '../RoundRobinTable'
import type { Tournament } from '../../types'

const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
})

const wrap = (ui: React.ReactElement) => (
    <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>
)

const makeTournament = (matchOverrides: object[] = []): Tournament => ({
    id: 1,
    name: 'RR Cup',
    date: '2026-01-01T00:00:00.000Z',
    createdAt: '2026-01-01T00:00:00.000Z',
    formatId: 2,
    format: { id: 2, name: 'Round Robin' },
    TournamentTeam: [
        { teamId: 1, team: { id: 1, name: 'Alpha' } },
        { teamId: 2, team: { id: 2, name: 'Beta' } },
        { teamId: 3, team: { id: 3, name: 'Gamma' } },
    ],
    Match: [
        {
            id: 1,
            tournamentId: 1,
            teamAId: 1,
            teamBId: 2,
            teamAScore: 3,
            teamBScore: 1,
            round: 1,
            played: true,
            teamA: { id: 1, name: 'Alpha' },
            teamB: { id: 2, name: 'Beta' },
        },
        {
            id: 2,
            tournamentId: 1,
            teamAId: 1,
            teamBId: 3,
            teamAScore: 2,
            teamBScore: 2,
            round: 2,
            played: true,
            teamA: { id: 1, name: 'Alpha' },
            teamB: { id: 3, name: 'Gamma' },
        },
        {
            id: 3,
            tournamentId: 1,
            teamAId: 2,
            teamBId: 3,
            teamAScore: 0,
            teamBScore: 0,
            round: 3,
            played: false,
            teamA: { id: 2, name: 'Beta' },
            teamB: { id: 3, name: 'Gamma' },
        },
        ...matchOverrides,
    ] as Tournament['Match'],
})

describe('RoundRobinTable', () => {
    it('renders the Standings heading', () => {
        render(
            wrap(
                <RoundRobinTable tournament={makeTournament()} activeLeg={1} />
            )
        )
        expect(screen.getByText('Standings')).toBeInTheDocument()
    })

    it('renders all team names in the standings table', () => {
        render(
            wrap(
                <RoundRobinTable tournament={makeTournament()} activeLeg={1} />
            )
        )
        expect(screen.getAllByText('Alpha').length).toBeGreaterThanOrEqual(1)
        expect(screen.getAllByText('Beta').length).toBeGreaterThanOrEqual(1)
        expect(screen.getAllByText('Gamma').length).toBeGreaterThanOrEqual(1)
    })

    it('renders the correct score in a played cell (3:1)', () => {
        render(
            wrap(
                <RoundRobinTable tournament={makeTournament()} activeLeg={1} />
            )
        )
        expect(screen.getAllByText('3:1').length).toBeGreaterThanOrEqual(1)
    })

    it('renders a draw score (2:2)', () => {
        render(
            wrap(
                <RoundRobinTable tournament={makeTournament()} activeLeg={1} />
            )
        )
        expect(screen.getAllByText('2:2').length).toBeGreaterThanOrEqual(1)
    })

    it('renders a pending cell indicator for unplayed matches', () => {
        render(
            wrap(
                <RoundRobinTable tournament={makeTournament()} activeLeg={1} />
            )
        )
        const pending = screen.getAllByText(':')
        expect(pending.length).toBeGreaterThan(0)
    })

    it('renders correct standings columns', () => {
        render(
            wrap(
                <RoundRobinTable tournament={makeTournament()} activeLeg={1} />
            )
        )
        expect(screen.getByTitle('Played')).toBeInTheDocument()
        expect(screen.getByTitle('Won')).toBeInTheDocument()
        expect(screen.getByTitle('Points')).toBeInTheDocument()
    })

    it('opens the ChangeScore modal when a played cell is clicked', () => {
        render(
            wrap(
                <RoundRobinTable tournament={makeTournament()} activeLeg={1} />
            )
        )
        const scoreCell = screen.getAllByText('3:1')[0]
        fireEvent.click(scoreCell)
        expect(screen.getByText('Update Score')).toBeInTheDocument()
    })

    it('closes the ChangeScore modal when Cancel is clicked', () => {
        render(
            wrap(
                <RoundRobinTable tournament={makeTournament()} activeLeg={1} />
            )
        )
        fireEvent.click(screen.getAllByText('3:1')[0])
        fireEvent.click(screen.getByText('Cancel'))
        expect(screen.queryByText('Update Score')).not.toBeInTheDocument()
    })

    it('displays the correct Leg label', () => {
        render(
            wrap(
                <RoundRobinTable tournament={makeTournament()} activeLeg={1} />
            )
        )
        expect(screen.getByText('Leg 1')).toBeInTheDocument()
    })

    it('displays Leg 2 label when activeLeg is 2', () => {
        render(
            wrap(
                <RoundRobinTable tournament={makeTournament()} activeLeg={2} />
            )
        )
        expect(screen.getByText('Leg 2')).toBeInTheDocument()
    })

    it('renders diagonal cells for same-team intersections', () => {
        const { container } = render(
            wrap(
                <RoundRobinTable tournament={makeTournament()} activeLeg={1} />
            )
        )
        const diagonals = container.querySelectorAll(
            '[class*="RRCellDiagonal"]'
        )
        expect(diagonals).toHaveLength(3)
    })
})
