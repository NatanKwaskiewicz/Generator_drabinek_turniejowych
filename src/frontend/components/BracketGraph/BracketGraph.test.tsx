import React from 'react'
import { render, screen } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import BracketGraph from '../BracketGraph'
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
    scoreA: 0,
    scoreB: 0,
    round: 1,
    played: false,
    ...overrides,
})

describe('BracketGraph', () => {
    it('renders team names from a single round', () => {
        render(
            wrap(
                <BracketGraph
                    rounds={[[makeMatch()]]}
                    onUpdateScore={jest.fn()}
                />
            )
        )
        expect(screen.getByText('Alpha')).toBeInTheDocument()
        expect(screen.getByText('Beta')).toBeInTheDocument()
    })

    it('renders teams across multiple rounds', () => {
        const round1 = [
            makeMatch({ id: 1, teamA: 'Alpha', teamB: 'Beta' }),
            makeMatch({ id: 2, teamA: 'Gamma', teamB: 'Delta' }),
        ]
        const round2 = [makeMatch({ id: 3, teamA: 'Alpha', teamB: 'Gamma' })]
        render(
            wrap(
                <BracketGraph
                    rounds={[round1, round2]}
                    onUpdateScore={jest.fn()}
                />
            )
        )
        expect(screen.getAllByText('Alpha').length).toBeGreaterThanOrEqual(1)
        expect(screen.getAllByText('Gamma').length).toBeGreaterThanOrEqual(1)
    })

    it('renders an svg connector element', () => {
        const { container } = render(
            wrap(
                <BracketGraph
                    rounds={[[makeMatch()]]}
                    onUpdateScore={jest.fn()}
                />
            )
        )
        expect(container.querySelector('svg')).toBeInTheDocument()
    })
})