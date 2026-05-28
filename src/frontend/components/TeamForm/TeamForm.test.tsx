import { render, screen, fireEvent } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import TeamForm from './TeamForm.tsx'

const mockMutate = jest.fn()
jest.mock('../../hooks/useCreateTeam', () => ({
    useCreateTeam: () => ({
        mutate: mockMutate,
        isPending: false,
        isError: false,
        error: null,
    }),
}))

jest.mock('../../hooks/useCountries', () => ({
    useCountries: () => ({
        data: [
            { code: 'PL', name: 'Poland', flag: '🇵🇱', flagUrl: 'https://example.com/pl.svg' },
            { code: 'DE', name: 'Germany', flag: '🇩🇪', flagUrl: 'https://example.com/de.svg' },
        ],
        isLoading: false,
    }),
}))

const queryClient = new QueryClient()

const renderForm = () =>
    render(
        <QueryClientProvider client={queryClient}>
            <TeamForm />
        </QueryClientProvider>
    )

describe('TeamForm', () => {
    beforeEach(() => {
        mockMutate.mockClear()
    })

    it('renders the form title', () => {
        renderForm()
        expect(screen.getByText('Set up your team')).toBeInTheDocument()
    })

    it('renders team name input', () => {
        renderForm()
        expect(screen.getByPlaceholderText('e.g. ZSK Counter-Strike Team Alpha')).toBeInTheDocument()
    })

    it('renders Create Team button', () => {
        renderForm()
        expect(screen.getByText('Create Team')).toBeInTheDocument()
    })

    it('renders default member count of 2', () => {
        renderForm()
        const counter = screen.getByDisplayValue('2')
        expect(counter).toBeInTheDocument()
    })

    it('does not submit when team name is empty', () => {
        renderForm()
        fireEvent.click(screen.getByText('Create Team'))
        expect(mockMutate).not.toHaveBeenCalled()
    })

    it('submits with team name when filled', () => {
        renderForm()
        fireEvent.change(screen.getByPlaceholderText('e.g. ZSK Counter-Strike Team Alpha'), {
            target: { value: 'ZSK Alpha' },
        })
        fireEvent.click(screen.getByText('Create Team'))
        expect(mockMutate).toHaveBeenCalledWith(
            expect.objectContaining({ name: 'ZSK Alpha' })
        )
    })

    it('increments member count on + click', () => {
        renderForm()
        fireEvent.click(screen.getByText('+'))
        expect(screen.getByDisplayValue('3')).toBeInTheDocument()
    })

    it('decrements member count on − click', () => {
        renderForm()
        fireEvent.click(screen.getByText('−'))
        expect(screen.getByDisplayValue('1')).toBeInTheDocument()
    })

    it('clamps member count at 1 minimum', () => {
        renderForm()
        for (let i = 0; i < 5; i++) fireEvent.click(screen.getByText('−'))
        expect(screen.getByDisplayValue('1')).toBeInTheDocument()
    })

    it('clamps member count at 32 maximum', () => {
        renderForm()
        for (let i = 0; i < 40; i++) fireEvent.click(screen.getByText('+'))
        expect(screen.getByDisplayValue('32')).toBeInTheDocument()
    })

    it('renders country select dropdowns for members', () => {
        renderForm()
        const selects = screen.getAllByRole('combobox')
        expect(selects.length).toBeGreaterThanOrEqual(2)
    })

    it('renders country options Poland and Germany', () => {
        renderForm()
        expect(screen.getAllByText(/Poland/).length).toBeGreaterThan(0)
        expect(screen.getAllByText(/Germany/).length).toBeGreaterThan(0)
    })

    it('trims whitespace from team name before submit', () => {
        renderForm()
        fireEvent.change(screen.getByPlaceholderText('e.g. ZSK Counter-Strike Team Alpha'), {
            target: { value: '  ZSK Alpha  ' },
        })
        fireEvent.click(screen.getByText('Create Team'))
        expect(mockMutate).toHaveBeenCalledWith(
            expect.objectContaining({ name: 'ZSK Alpha' })
        )
    })

    it('submits with undefined teamMember when all member fields are empty', () => {
        renderForm()
        fireEvent.change(screen.getByPlaceholderText('e.g. ZSK Counter-Strike Team Alpha'), {
            target: { value: 'ZSK Alpha' },
        })
        fireEvent.click(screen.getByText('Create Team'))
        expect(mockMutate).toHaveBeenCalledWith(
            expect.objectContaining({ teamMember: undefined })
        )
    })
})
