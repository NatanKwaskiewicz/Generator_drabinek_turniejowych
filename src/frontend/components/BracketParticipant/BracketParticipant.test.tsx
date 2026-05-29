import React from 'react'
import { render, screen } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import BracketParticipant from '../BracketParticipant'

const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
})

const wrap = (ui: React.ReactElement) => (
    <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>
)

describe('BracketParticipant', () => {
    it('renders the team name', () => {
        render(wrap(<BracketParticipant name="Team Alpha" />))
        expect(screen.getByText('Team Alpha')).toBeInTheDocument()
    })

    it('renders the score when provided', () => {
        render(wrap(<BracketParticipant name="Team Alpha" score={3} />))
        expect(screen.getByText('3')).toBeInTheDocument()
    })

    it('does not render a score element when score is undefined', () => {
        const { container } = render(
            wrap(<BracketParticipant name="Team Alpha" />)
        )
        expect(container.querySelectorAll('span').length).toBe(1)
    })

    it('renders score of 0', () => {
        render(wrap(<BracketParticipant name="Team Alpha" score={0} />))
        expect(screen.getByText('0')).toBeInTheDocument()
    })
})
