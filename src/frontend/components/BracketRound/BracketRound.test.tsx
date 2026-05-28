import React from 'react'
import { render, screen } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import BracketRound from '../BracketRound'
import type { Match } from '../../types'

const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
})

const wrap = (ui: React.ReactElement) => (
    <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>
)

const makeMatch = (overrides: Partial<Match> = {}): Match => ({
    id: 1,
    teamA: 'Alpha',
    teamB: 'Beta',
    teamAId: 1,
    teamBId: 2,
    scoreA: 0,
    scoreB: 0,
    round: 1,
    played: false,
    ...overrides,
})

describe('BracketRound', () => {
    it('renders all matches in the round', () => {
        const matches = [
            makeMatch({ id: 1, teamA: 'Alpha', teamB: 'Beta' }),
            makeMatch({ id: 2, teamA: 'Gamma', teamB: 'Delta' }),
        ]
        render(
            wrap(
                <BracketRound
                    matches={matches}
                    isLast={false}
                    setMatchRef={() => () => {}}
                    roundIndex={0}
                    onUpdateScore={jest.fn()}
                />
            )
        )
        expect(screen.getByText('Alpha')).toBeInTheDocument()
        expect(screen.getByText('Beta')).toBeInTheDocument()
        expect(screen.getByText('Gamma')).toBeInTheDocument()
        expect(screen.getByText('Delta')).toBeInTheDocument()
    })

    it('renders a single match', () => {
        render(
            wrap(
                <BracketRound
                    matches={[makeMatch()]}
                    isLast={true}
                    setMatchRef={() => () => {}}
                    roundIndex={0}
                    onUpdateScore={jest.fn()}
                />
            )
        )
        expect(screen.getByText('Alpha')).toBeInTheDocument()
    })

    it('renders nothing when matches array is empty', () => {
        const { container } = render(
            wrap(
                <BracketRound
                    matches={[]}
                    isLast={false}
                    setMatchRef={() => () => {}}
                    roundIndex={0}
                    onUpdateScore={jest.fn()}
                />
            )
        )
        expect(container.firstChild?.childNodes.length).toBe(0)
    })
})