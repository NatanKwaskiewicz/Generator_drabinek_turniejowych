import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import NavBar from './NavBar.tsx'

const renderNavBar = () =>
    render(
        <MemoryRouter>
            <NavBar />
        </MemoryRouter>
    )

describe('NavBar', () => {
    it('renders the Tourney logo', () => {
        renderNavBar()
        expect(screen.getByText('Tourney')).toBeInTheDocument()
    })

    it('renders all three navigation links', () => {
        renderNavBar()
        expect(screen.getByText('Browse tournaments')).toBeInTheDocument()
        expect(screen.getByText('Create bracket')).toBeInTheDocument()
        expect(screen.getByText('Register team')).toBeInTheDocument()
    })

    it('logo link points to /', () => {
        renderNavBar()
        expect(screen.getByText('Tourney').closest('a')).toHaveAttribute(
            'href',
            '/'
        )
    })

    it('Browse tournaments points to /tournaments', () => {
        renderNavBar()
        expect(
            screen.getByText('Browse tournaments').closest('a')
        ).toHaveAttribute('href', '/tournaments')
    })

    it('Create bracket points to /bracketGenerator', () => {
        renderNavBar()
        expect(screen.getByText('Create bracket').closest('a')).toHaveAttribute(
            'href',
            '/bracketGenerator'
        )
    })

    it('Register team points to /createTeam', () => {
        renderNavBar()
        expect(screen.getByText('Register team').closest('a')).toHaveAttribute(
            'href',
            '/createTeam'
        )
    })

    it('renders a nav element', () => {
        renderNavBar()
        expect(screen.getByRole('navigation')).toBeInTheDocument()
    })
})
