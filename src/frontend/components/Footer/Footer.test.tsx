import { render, screen } from '@testing-library/react'
import Footer from './Footer.tsx'

describe('Footer', () => {
    it('renders the Tourney brand name', () => {
        render(<Footer />)
        expect(screen.getByText('Tourney')).toBeInTheDocument()
    })

    it('renders the current year in copyright', () => {
        render(<Footer />)
        const year = new Date().getFullYear().toString()
        expect(screen.getByText(/Copyright/)).toBeInTheDocument()
        expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
    })

    it('renders the authors names', () => {
        render(<Footer />)
        expect(screen.getByText(/Bartosz Król/)).toBeInTheDocument()
        expect(screen.getByText(/Natan Kwaśkiewicz/)).toBeInTheDocument()
    })

    it('renders a footer element', () => {
        render(<Footer />)
        expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    })
})
