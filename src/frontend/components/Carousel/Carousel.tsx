import styles from './Carousel.module.scss'
import type { Slide } from '../../types'
import { useEffect, useRef, useState } from 'react'

const Carousel = ({ data }: { data: Slide[] }) => {
    const [slide, setSlide] = useState(0)
    const trackRef = useRef<HTMLDivElement>(null)
    const [offset, setOffset] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1))
        }, 5000)

        return () => clearInterval(interval)
    }, [data.length])

    const getSlideWidth = () => {
        if (!trackRef.current) return 0
        const raw = getComputedStyle(trackRef.current)
            .getPropertyValue('--carousel-slide-width')
            .trim()
        return parseFloat(raw) || 0
    }

    useEffect(() => {
        const update = () => setOffset(getSlideWidth() * slide)
        update()
        window.addEventListener('resize', update)
        return () => window.removeEventListener('resize', update)
    })

    return (
        <>
            <div className={styles.Carousel}>
                <div
                    ref={trackRef}
                    className={styles.CarouselTrack}
                    style={{ transform: `translateX(-${offset}vw)` }}
                >
                    {data.map((item: Slide, index: number) => {
                        return (
                            <img
                                className={styles.CarouselImage}
                                src={item.src}
                                alt={item.alt}
                                key={index}
                            />
                        )
                    })}
                </div>
            </div>
        </>
    )
}
export default Carousel
