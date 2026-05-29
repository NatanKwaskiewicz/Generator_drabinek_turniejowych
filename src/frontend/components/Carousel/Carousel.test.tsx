import { render, screen, act } from '@testing-library/react'
import Carousel from '../Carousel'
import type { Slide } from '../../types'

const slides: Slide[] = [
    { src: '/img1.jpg', alt: 'Slide one' },
    { src: '/img2.jpg', alt: 'Slide two' },
    { src: '/img3.jpg', alt: 'Slide three' },
]

describe('Carousel', () => {
    beforeEach(() => {
        jest.useFakeTimers()
    })

    afterEach(() => {
        jest.useRealTimers()
    })

    it('renders all slide images', () => {
        render(<Carousel data={slides} />)
        const images = screen.getAllByRole('img')
        expect(images).toHaveLength(3)
    })

    it('renders each image with the correct alt text', () => {
        render(<Carousel data={slides} />)
        expect(screen.getByAltText('Slide one')).toBeInTheDocument()
        expect(screen.getByAltText('Slide two')).toBeInTheDocument()
        expect(screen.getByAltText('Slide three')).toBeInTheDocument()
    })

    it('renders each image with the correct src', () => {
        render(<Carousel data={slides} />)
        expect(screen.getByAltText('Slide one')).toHaveAttribute('src', '/img1.jpg')
        expect(screen.getByAltText('Slide two')).toHaveAttribute('src', '/img2.jpg')
    })

    it('renders a single slide without crashing', () => {
        render(<Carousel data={[{ src: '/solo.jpg', alt: 'Solo' }]} />)
        expect(screen.getByAltText('Solo')).toBeInTheDocument()
    })

    it('advances the slide index after 5 seconds', () => {
        render(<Carousel data={slides} />)
        act(() => {
            jest.advanceTimersByTime(5000)
        })
        expect(screen.getAllByRole('img')).toHaveLength(3)
    })

    it('wraps back to the first slide after the last one', () => {
        render(<Carousel data={slides} />)
        act(() => {
            jest.advanceTimersByTime(15000)
        })
        expect(screen.getAllByRole('img')).toHaveLength(3)
    })

    it('cleans up the interval on unmount without throwing', () => {
        const { unmount } = render(<Carousel data={slides} />)
        expect(() => {
            act(() => {
                jest.advanceTimersByTime(3000)
            })
            unmount()
        }).not.toThrow()
    })
})
