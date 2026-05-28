
import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import TournamentCard from '../TournamentCard'
import type { Tournament } from '../../types'

const mockNavigate = jest.fn()
jest.mock('react-router', () => ({
    ...jest.requireActual('react-router'),
    useNavigate: () => mockNavigate,
}))

const mockDeleteMutate = jest.fn()
jest.mock('../../hooks/useTournaments', () => ({
    useDeleteTournament: () => ({
        mutate: mockDeleteMutate,
        isPending: false,
    }),
}))

const tournament: Tournament = {
    id: 42,
    name: 'ZSK Championship',
    date: '2025-01-01',
    createdAt: '2025-01-01T00:00:00.000Z',
    formatId: 1,
    format: { id: 1, name: 'Single elimination' },
    TournamentTeam: [
        { teamId: 1, team: { id: 1, name: 'Alpha' } },
        { teamId: 2, team: { id: 2, name: 'Beta' } },
        { teamId: 3, team: { id: 3, name: 'Gamma' } },
    ],
    Match: [],
}

const singleTeamTournament: Tournament = {
    ...tournament,
    id: 43,
    TournamentTeam: [{ teamId: 1, team: { id: 1, name: 'Alpha' } }],
}

const queryClient = new QueryClient()

const renderCard = (t = tournament) =>
    render(
        <QueryClientProvider client={queryClient}>
            <MemoryRouter>
                <TournamentCard tournament={t} />
            </MemoryRouter>
        </QueryClientProvider>
    )

describe('TournamentCard', () => {
    beforeEach(() => {
        mockNavigate.mockClear()
        mockDeleteMutate.mockClear()
    })

    it('renders tournament name', () => {
        renderCard()
        expect(screen.getByText('ZSK Championship')).toBeInTheDocument()
    })

    it('renders format name as badge', () => {
        renderCard()
        expect(screen.getByText('Single elimination')).toBeInTheDocument()
    })

    it('renders team count with plural "teams"', () => {
        renderCard()
        expect(screen.getByText('3 teams')).toBeInTheDocument()
    })

    it('renders team count with singular "team"', () => {
        renderCard(singleTeamTournament)
        expect(screen.getByText('1 team')).toBeInTheDocument()
    })

    it('navigates to bracket on Open click', () => {
        renderCard()
        fireEvent.click(screen.getByText('Open'))
        expect(mockNavigate).toHaveBeenCalledWith('/bracket/42')
    })

    it('calls deleteTournament on delete button click', () => {
        renderCard()
        fireEvent.click(screen.getByLabelText('Delete tournament'))
        expect(mockDeleteMutate).toHaveBeenCalledWith(42)
    })

    it('renders Open button', () => {
        renderCard()
        expect(screen.getByText('Open')).toBeInTheDocument()
    })
})
