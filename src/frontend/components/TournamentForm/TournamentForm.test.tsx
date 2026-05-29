import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import TournamentForm from '../TournamentForm'
import { useCreateTournament } from '../../hooks/useCreateTournament.ts'
import { useTeams } from '../../hooks/useTeams.ts'
import { useFormats } from '../../hooks/useFormats.ts'

jest.mock('../../hooks/useCreateTournament.ts', () => ({
    useCreateTournament: jest.fn(),
}))
jest.mock('../../hooks/useTeams.ts', () => ({
    useTeams: jest.fn(),
}))
jest.mock('../../hooks/useFormats.ts', () => ({
    useFormats: jest.fn(),
}))

const mockUseCreateTournament = useCreateTournament as jest.Mock
const mockUseTeams = useTeams as jest.Mock
const mockUseFormats = useFormats as jest.Mock

const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
})

const wrap = (ui: React.ReactElement) => (
    <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>
)

const formats = [
    {
        id: 1,
        name: 'Single elimination',
        description: 'Knockout',
        image_path: '',
    },
    {
        id: 2,
        name: 'Round Robin',
        description: 'Everyone plays',
        image_path: '',
    },
    { id: 3, name: 'Swiss', description: 'Adaptive', image_path: '' },
]

const teams = [
    { id: 1, name: 'Alpha' },
    { id: 2, name: 'Beta' },
    { id: 3, name: 'Gamma' },
    { id: 4, name: 'Delta' },
]

const defaultMocks = () => {
    mockUseCreateTournament.mockReturnValue({
        mutate: jest.fn(),
        isPending: false,
        isError: false,
        error: null,
    })
    mockUseTeams.mockReturnValue({ data: teams, isLoading: false })
    mockUseFormats.mockReturnValue({
        data: formats,
        isLoading: false,
        isError: false,
    })
}

describe('TournamentForm', () => {
    beforeEach(() => {
        defaultMocks()
    })

    afterEach(() => {
        jest.clearAllMocks()
    })

    it('renders the form heading', () => {
        render(wrap(<TournamentForm />))
        expect(screen.getByText('Set up your tournament')).toBeInTheDocument()
    })

    it('renders the tournament name input', () => {
        render(wrap(<TournamentForm />))
        expect(
            screen.getByPlaceholderText('e.g. ZSK Counter-Strike Championship')
        ).toBeInTheDocument()
    })

    it('renders the Create Tournament button', () => {
        render(wrap(<TournamentForm />))
        expect(
            screen.getByRole('button', { name: 'Create Tournament' })
        ).toBeInTheDocument()
    })

    it('renders a button for each format', () => {
        render(wrap(<TournamentForm />))
        expect(
            screen.getByRole('button', { name: 'Single elimination' })
        ).toBeInTheDocument()
        expect(
            screen.getByRole('button', { name: 'Round Robin' })
        ).toBeInTheDocument()
        expect(
            screen.getByRole('button', { name: 'Swiss' })
        ).toBeInTheDocument()
    })

    it('renders a button for each available team', () => {
        render(wrap(<TournamentForm />))
        expect(
            screen.getByRole('button', { name: 'Alpha' })
        ).toBeInTheDocument()
        expect(screen.getByRole('button', { name: 'Beta' })).toBeInTheDocument()
        expect(
            screen.getByRole('button', { name: 'Gamma' })
        ).toBeInTheDocument()
        expect(
            screen.getByRole('button', { name: 'Delta' })
        ).toBeInTheDocument()
    })

    it('shows "No teams registered yet." when the teams list is empty', () => {
        mockUseTeams.mockReturnValue({ data: [], isLoading: false })
        render(wrap(<TournamentForm />))
        expect(screen.getByText('No teams registered yet.')).toBeInTheDocument()
    })

    it('shows a loading message while teams are fetching', () => {
        mockUseTeams.mockReturnValue({ data: undefined, isLoading: true })
        render(wrap(<TournamentForm />))
        expect(screen.getByText('Loading teams...')).toBeInTheDocument()
    })

    it('shows a loading message while formats are fetching', () => {
        mockUseFormats.mockReturnValue({
            data: undefined,
            isLoading: true,
            isError: false,
        })
        render(wrap(<TournamentForm />))
        expect(screen.getByText('Loading formats...')).toBeInTheDocument()
    })

    it('shows an error message when formats fail to load', () => {
        mockUseFormats.mockReturnValue({
            data: undefined,
            isLoading: false,
            isError: true,
        })
        render(wrap(<TournamentForm />))
        expect(screen.getByText('Failed to load formats.')).toBeInTheDocument()
    })

    it('shows a validation error when submitting without a tournament name', () => {
        render(wrap(<TournamentForm />))
        fireEvent.click(
            screen.getByRole('button', { name: 'Create Tournament' })
        )
        expect(
            screen.getByText('Tournament name is required')
        ).toBeInTheDocument()
    })

    it('shows allowed-sizes hint when Single elimination format is selected', () => {
        render(wrap(<TournamentForm />))
        expect(
            screen.getByText('Allowed sizes: 2, 4, 8, 16, 32, 64, 128')
        ).toBeInTheDocument()
    })

    it('hides allowed-sizes hint after switching to Round Robin', () => {
        render(wrap(<TournamentForm />))
        fireEvent.click(screen.getByRole('button', { name: 'Round Robin' }))
        expect(
            screen.queryByText('Allowed sizes: 2, 4, 8, 16, 32, 64, 128')
        ).not.toBeInTheDocument()
    })

    it('toggles a team on then off when clicked twice', () => {
        render(wrap(<TournamentForm />))
        const alphaBtn = screen.getByRole('button', { name: 'Alpha' })
        fireEvent.click(alphaBtn)
        expect(alphaBtn).toHaveClass('TournamentFormFieldTeamOptionSelected')
        fireEvent.click(alphaBtn)
        expect(alphaBtn).not.toHaveClass(
            'TournamentFormFieldTeamOptionSelected'
        )
    })

    it('calls mutate with correct payload when form is submitted with valid data', () => {
        const mutate = jest.fn()
        mockUseCreateTournament.mockReturnValue({
            mutate,
            isPending: false,
            isError: false,
            error: null,
        })
        render(wrap(<TournamentForm />))
        fireEvent.change(
            screen.getByPlaceholderText('e.g. ZSK Counter-Strike Championship'),
            { target: { value: 'My Cup' } }
        )
        fireEvent.click(screen.getByRole('button', { name: 'Alpha' }))
        fireEvent.click(screen.getByRole('button', { name: 'Beta' }))
        fireEvent.click(
            screen.getByRole('button', { name: 'Create Tournament' })
        )
        expect(mutate).toHaveBeenCalledWith(
            expect.objectContaining({
                name: 'My Cup',
                formatId: 1,
                teams: expect.arrayContaining([{ teamId: 1 }, { teamId: 2 }]),
            })
        )
    })

    it('shows a validation error for single elimination when team count is not a power of 2', () => {
        render(wrap(<TournamentForm />))
        fireEvent.change(
            screen.getByPlaceholderText('e.g. ZSK Counter-Strike Championship'),
            { target: { value: 'Bad Cup' } }
        )
        fireEvent.click(screen.getByRole('button', { name: 'Alpha' }))
        fireEvent.click(screen.getByRole('button', { name: 'Beta' }))
        fireEvent.click(screen.getByRole('button', { name: 'Gamma' }))
        fireEvent.click(
            screen.getByRole('button', { name: 'Create Tournament' })
        )
        expect(
            screen.getByText(
                'Single elimination format requires 2, 4, 8, 16, 32, 64, or 128 teams.'
            )
        ).toBeInTheDocument()
    })

    it('shows "Creating…" on the submit button while mutation is pending', () => {
        mockUseCreateTournament.mockReturnValue({
            mutate: jest.fn(),
            isPending: true,
            isError: false,
            error: null,
        })
        render(wrap(<TournamentForm />))
        expect(screen.getByText('Creating…')).toBeInTheDocument()
    })

    it('disables the submit button while mutation is pending', () => {
        mockUseCreateTournament.mockReturnValue({
            mutate: jest.fn(),
            isPending: true,
            isError: false,
            error: null,
        })
        render(wrap(<TournamentForm />))
        expect(screen.getByText('Creating…').closest('button')).toBeDisabled()
    })
})
