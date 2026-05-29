import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import TeamHeader from '../TeamHeader'

const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
})

const wrap = (ui: React.ReactElement) => (
    <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>
)

describe('TeamHeader', () => {
    it('renders the team name', () => {
        render(wrap(<TeamHeader id={1} name="Alpha" className="header" />))
        expect(screen.getByText('Alpha')).toBeInTheDocument()
    })

    it('applies the className prop to the wrapper element', () => {
        const { container } = render(
            wrap(<TeamHeader id={1} name="Alpha" className="my-header" />)
        )
        expect(container.firstChild).toHaveClass('my-header')
    })

    it('sets the title attribute to the team name for truncation tooltip', () => {
        const { container } = render(
            wrap(<TeamHeader id={1} name="Alpha" className="header" />)
        )
        expect(container.firstChild).toHaveAttribute('title', 'Alpha')
    })

    it('does not show a tooltip before hovering', () => {
        render(wrap(<TeamHeader id={1} name="Alpha" className="header" />))
        expect(screen.queryByText('Loading...')).not.toBeInTheDocument()
    })

    it('shows the TeamTooltip on mouse enter', () => {
        render(wrap(<TeamHeader id={1} name="Alpha" className="header" />))
        const header = screen.getByTitle('Alpha')
        fireEvent.mouseEnter(header)
        expect(screen.getByText('Loading...')).toBeInTheDocument()
    })

    it('hides the TeamTooltip on mouse leave', () => {
        render(wrap(<TeamHeader id={1} name="Alpha" className="header" />))
        const header = screen.getByTitle('Alpha')
        fireEvent.mouseEnter(header)
        fireEvent.mouseLeave(header)
        expect(screen.queryByText('Loading...')).not.toBeInTheDocument()
    })
})
