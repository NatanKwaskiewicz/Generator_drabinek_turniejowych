import React from 'react'
import { render, screen } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import TeamTooltip from '../TeamTooltip'
import type { Team } from '../../types'
import { useTeam } from '../../hooks/useTeam'
import { useCountries } from '../../hooks/useCountries'

jest.mock('../../hooks/useTeam', () => ({
    useTeam: jest.fn(),
}))
jest.mock('../../hooks/useCountries', () => ({
    useCountries: jest.fn(),
}))

const mockUseTeam = useTeam as jest.Mock
const mockUseCountries = useCountries as jest.Mock

const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
})

const wrap = (ui: React.ReactElement) => (
    <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>
)

const position = { top: 100, left: 200 }

const teamWithMembers: Team = {
    id: 1,
    name: 'Alpha',
    teamMembers: [
        {
            id: 1,
            name: 'Jan',
            surname: 'Kowalski',
            nickname: 'JK',
            countryCode: 'PL',
            teamId: 1,
        },
        {
            id: 2,
            name: 'Piotr',
            surname: 'Nowak',
            nickname: null,
            countryCode: null,
            teamId: 1,
        },
    ],
}

const teamNoMembers: Team = {
    id: 2,
    name: 'Beta',
    teamMembers: [],
}

const countries = [
    { name: 'Poland', code: 'PL', flag: '🇵🇱', flagUrl: '/pl.svg' },
]

describe('TeamTooltip', () => {
    beforeEach(() => {
        mockUseCountries.mockReturnValue({ data: countries })
    })

    afterEach(() => {
        jest.clearAllMocks()
    })

    it('shows a loading indicator while the team data is fetching', () => {
        mockUseTeam.mockReturnValue({ data: undefined, isLoading: true })
        render(wrap(<TeamTooltip teamId={1} position={position} />))
        expect(screen.getByText('Loading...')).toBeInTheDocument()
    })

    it('renders the team name when data is loaded', () => {
        mockUseTeam.mockReturnValue({ data: teamWithMembers, isLoading: false })
        render(wrap(<TeamTooltip teamId={1} position={position} />))
        expect(screen.getByText('Alpha')).toBeInTheDocument()
    })

    it('renders each members name', () => {
        mockUseTeam.mockReturnValue({ data: teamWithMembers, isLoading: false })
        render(wrap(<TeamTooltip teamId={1} position={position} />))
        expect(screen.getByText(/Jan/)).toBeInTheDocument()
        expect(screen.getByText(/Piotr/)).toBeInTheDocument()
    })

    it('renders the member nickname in quotes when present', () => {
        mockUseTeam.mockReturnValue({ data: teamWithMembers, isLoading: false })
        render(wrap(<TeamTooltip teamId={1} position={position} />))
        expect(screen.getByText('"JK"')).toBeInTheDocument()
    })

    it('does not render a nickname element when nickname is null', () => {
        mockUseTeam.mockReturnValue({ data: teamWithMembers, isLoading: false })
        render(wrap(<TeamTooltip teamId={1} position={position} />))
        const nicknames = screen.queryAllByText(/^".*"$/)
        expect(nicknames).toHaveLength(1)
    })

    it('renders a flag image for a member with a known countryCode', () => {
        mockUseTeam.mockReturnValue({ data: teamWithMembers, isLoading: false })
        render(wrap(<TeamTooltip teamId={1} position={position} />))
        const flag = screen.getByRole('img')
        expect(flag).toHaveAttribute('src', '/pl.svg')
    })

    it('shows "No members" when the team has an empty members list', () => {
        mockUseTeam.mockReturnValue({ data: teamNoMembers, isLoading: false })
        render(wrap(<TeamTooltip teamId={2} position={position} />))
        expect(screen.getByText('No members')).toBeInTheDocument()
    })

    it('positions the tooltip using the passed position prop', () => {
        mockUseTeam.mockReturnValue({ data: teamWithMembers, isLoading: false })
        render(
            wrap(<TeamTooltip teamId={1} position={{ top: 50, left: 75 }} />)
        )
        const tooltip = document.body.querySelector(
            '[class*="TeamTooltip"]'
        ) as HTMLElement
        expect(tooltip.style.top).toBe('50px')
        expect(tooltip.style.left).toBe('75px')
    })

    it('renders nothing visible when data is undefined and not loading', () => {
        mockUseTeam.mockReturnValue({ data: undefined, isLoading: false })
        render(wrap(<TeamTooltip teamId={1} position={position} />))
        const tooltip = document.body.querySelector(
            '[class*="TeamTooltip"]'
        ) as HTMLElement
        expect(tooltip.textContent).toBe('')
    })
})
