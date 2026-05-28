import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import BracketMatch from '../BracketMatch'
import type { Match } from '../../types'

const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
})

const match: Match = {
    id: 1,
    teamA: 'Alpha',
    teamB: 'Beta',
    teamAId: 1,
    teamBId: 2,
    scoreA: 3,
    scoreB: 1,
    round: 1,
    played: true,
}

const matchDraw: Match = {
    id: 2,
    teamA: 'Alpha',
    teamB: 'Beta',
    scoreA: 2,
    scoreB: 2,
    round: 1,
    played: true,
}

const renderMatch = (props: Partial<React.ComponentProps<typeof BracketMatch>> = {}) =>
    render(
        <QueryClientProvider client={queryClient}>
            <BracketMatch
                match={match}
                isLast={false}
                roundIndex={0}
                onUpdateScore={jest.fn()}
                {...props}
            />
        </QueryClientProvider>
    )

describe('BracketMatch', () => {
    it('renders both team names', () => {
        renderMatch()
        expect(screen.getByText('Alpha')).toBeInTheDocument()
        expect(screen.getByText('Beta')).toBeInTheDocument()
    })

    it('renders both scores', () => {
        renderMatch()
        expect(screen.getByText('3')).toBeInTheDocument()
        expect(screen.getByText('1')).toBeInTheDocument()
    })

    it('opens ChangeScore modal on click', () => {
        renderMatch()
        const matchDiv = screen.getByText('Alpha').closest('[class*="BracketMatch"]') as HTMLElement
        fireEvent.click(matchDiv)
        expect(screen.getByText('Update Score')).toBeInTheDocument()
    })

    it('closes ChangeScore modal on cancel', () => {
        renderMatch()
        const matchDiv = screen.getByText('Alpha').closest('[class*="BracketMatch"]') as HTMLElement
        fireEvent.click(matchDiv)
        fireEvent.click(screen.getByText('Cancel'))
        expect(screen.queryByText('Update Score')).not.toBeInTheDocument()
    })

    it('calls onUpdateScore with correct args on confirm', () => {
        const onUpdateScore = jest.fn()
        renderMatch({ onUpdateScore })
        const matchDiv = screen.getByText('Alpha').closest('[class*="BracketMatch"]') as HTMLElement
        fireEvent.click(matchDiv)
        fireEvent.click(screen.getByText('Confirm'))
        expect(onUpdateScore).toHaveBeenCalledWith(0, 1, 3, 1)
    })

    it('does not show ChangeScore on initial render', () => {
        renderMatch()
        expect(screen.queryByText('Update Score')).not.toBeInTheDocument()
    })

    it('renders correctly for a draw (no winner highlight)', () => {
        renderMatch({ match: matchDraw })
        expect(screen.getByText('Alpha')).toBeInTheDocument()
        expect(screen.getByText('Beta')).toBeInTheDocument()
    })
})
