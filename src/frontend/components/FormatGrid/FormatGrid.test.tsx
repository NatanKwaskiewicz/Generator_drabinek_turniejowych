import { render, screen } from '@testing-library/react'
import FormatGrid from '../FormatGrid'
import type { Format } from '../../types'

const formats: Format[] = [
    {
        id: 1,
        name: 'Single elimination',
        description: 'Lose and you are out',
        image_path: '',
    },
    {
        id: 2,
        name: 'Round Robin',
        description: 'Everyone plays everyone',
        image_path: '',
    },
    {
        id: 3,
        name: 'Swiss',
        description: 'Adaptive pairing system',
        image_path: '/swiss.png',
    },
]

describe('FormatGrid', () => {
    it('renders a card for every format', () => {
        render(<FormatGrid formats={formats} />)
        expect(screen.getByText('Single elimination')).toBeInTheDocument()
        expect(screen.getByText('Round Robin')).toBeInTheDocument()
        expect(screen.getByText('Swiss')).toBeInTheDocument()
    })

    it('renders the description for each format', () => {
        render(<FormatGrid formats={formats} />)
        expect(screen.getByText('Lose and you are out')).toBeInTheDocument()
        expect(screen.getByText('Everyone plays everyone')).toBeInTheDocument()
        expect(screen.getByText('Adaptive pairing system')).toBeInTheDocument()
    })

    it('renders an image for formats that have an image_path', () => {
        render(<FormatGrid formats={formats} />)
        expect(screen.getAllByRole('img')).toHaveLength(1)
    })

    it('does not crash when formats is undefined', () => {
        const { container } = render(<FormatGrid formats={undefined} />)
        expect(container.firstChild).toBeInTheDocument()
    })

    it('renders nothing inside the grid when formats is an empty array', () => {
        const { container } = render(<FormatGrid formats={[]} />)
        const grid = container.firstChild as HTMLElement
        expect(grid.childElementCount).toBe(0)
    })

    it('renders a single format correctly', () => {
        render(<FormatGrid formats={[formats[0]]} />)
        expect(screen.getByText('Single elimination')).toBeInTheDocument()
        expect(screen.queryByText('Round Robin')).not.toBeInTheDocument()
    })
})
