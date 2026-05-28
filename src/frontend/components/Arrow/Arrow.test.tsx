import { render } from '@testing-library/react'
import Arrow from '../Arrow'

describe('Arrow', () => {
    it('renders an svg', () => {
        const { container } = render(<Arrow />)
        expect(container.querySelector('svg')).toBeInTheDocument()
    })

    it('applies the default size of 24', () => {
        const { container } = render(<Arrow />)
        const svg = container.querySelector('svg')!
        expect(svg.getAttribute('width')).toBe('24')
        expect(svg.getAttribute('height')).toBe('24')
    })

    it('applies a custom size', () => {
        const { container } = render(<Arrow size={48} />)
        const svg = container.querySelector('svg')!
        expect(svg.getAttribute('width')).toBe('48')
        expect(svg.getAttribute('height')).toBe('48')
    })

    it('applies a custom color to the stroke elements', () => {
        const { container } = render(<Arrow color="#ff0000" />)
        const line = container.querySelector('line')!
        expect(line.getAttribute('stroke')).toBe('#ff0000')
    })
})
