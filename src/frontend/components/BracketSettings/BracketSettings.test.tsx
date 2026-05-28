import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import BracketSettings from '../BracketSettings'

const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
})

const wrap = (ui: React.ReactElement) => (
    <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>
)

const baseProps = {
    tournamentId: 1,
    tournamentName: 'My Tournament',
    currentRound: 1,
    isFinished: false,
    showAdvanceButton: true,
}

describe('BracketSettings', () => {
    it('renders expanded by default and shows tournament name label', () => {
        render(wrap(<BracketSettings {...baseProps} />))
        expect(screen.getByText('Tournament name')).toBeInTheDocument()
    })

    it('pre-fills the name input with the current tournament name', () => {
        render(wrap(<BracketSettings {...baseProps} />))
        const input = screen.getByDisplayValue('My Tournament')
        expect(input).toBeInTheDocument()
    })

    it('collapses when the toggle button is clicked', () => {
        render(wrap(<BracketSettings {...baseProps} />))
        fireEvent.click(screen.getByRole('button', { name: 'Collapse settings' }))
        expect(screen.queryByText('Tournament name')).not.toBeInTheDocument()
    })

    it('expands again after a second toggle click', () => {
        render(wrap(<BracketSettings {...baseProps} />))
        fireEvent.click(screen.getByRole('button', { name: 'Collapse settings' }))
        fireEvent.click(screen.getByRole('button', { name: 'Expand settings' }))
        expect(screen.getByText('Tournament name')).toBeInTheDocument()
    })

    it('shows Save button disabled when name is unchanged', () => {
        render(wrap(<BracketSettings {...baseProps} />))
        expect(screen.getByRole('button', { name: 'Save' })).toBeDisabled()
    })

    it('enables Save button after the name is changed', () => {
        render(wrap(<BracketSettings {...baseProps} />))
        const input = screen.getByDisplayValue('My Tournament')
        fireEvent.change(input, { target: { value: 'New Name' } })
        expect(screen.getByRole('button', { name: 'Save' })).not.toBeDisabled()
    })

    it('shows the advance-to-next-round button for elimination format', () => {
        render(wrap(<BracketSettings {...baseProps} />))
        expect(
            screen.getByText(`Advance to Round ${baseProps.currentRound + 1}`)
        ).toBeInTheDocument()
    })

    it('shows "Final round" when isFinished is true', () => {
        render(wrap(<BracketSettings {...baseProps} isFinished />))
        expect(screen.getByText('Final round')).toBeInTheDocument()
    })

    it('disables the advance button when isFinished is true', () => {
        render(wrap(<BracketSettings {...baseProps} isFinished />))
        expect(screen.getByText('Final round').closest('button')).toBeDisabled()
    })

    it('renders Leg 1 and Leg 2 buttons for Round Robin format', () => {
        render(
            wrap(
                <BracketSettings
                    {...baseProps}
                    showAdvanceButton={false}
                    isRoundRobin
                    onAdvanceLeg={jest.fn()}
                    currentLeg={1}
                />
            )
        )
        expect(screen.getByRole('button', { name: 'Leg 1' })).toBeInTheDocument()
        expect(screen.getByRole('button', { name: 'Leg 2' })).toBeInTheDocument()
    })

    it('calls onAdvanceLeg with the correct leg number when a leg button is clicked', () => {
        const onAdvanceLeg = jest.fn()
        render(
            wrap(
                <BracketSettings
                    {...baseProps}
                    showAdvanceButton={false}
                    isRoundRobin
                    onAdvanceLeg={onAdvanceLeg}
                    currentLeg={1}
                />
            )
        )
        fireEvent.click(screen.getByRole('button', { name: 'Leg 2' }))
        expect(onAdvanceLeg).toHaveBeenCalledWith(2)
    })

    it('shows the Swiss advance button when isSwiss is true', () => {
        render(wrap(<BracketSettings {...baseProps} isSwiss />))
        expect(
            screen.getByText(`Advance to Round ${baseProps.currentRound + 1}`)
        ).toBeInTheDocument()
    })

    it('shows "Tournament complete" for Swiss when isFinished is true', () => {
        render(wrap(<BracketSettings {...baseProps} isSwiss isFinished />))
        expect(screen.getByText('Tournament complete')).toBeInTheDocument()
    })
})