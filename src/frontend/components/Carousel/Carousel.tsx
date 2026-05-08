import styles from './Carousel.module.scss'
import type { Slide } from '../../types'
import { useEffect, useState } from 'react'

const Carousel = ({ data }: { data: Slide[] }) => {
    console.log(data)
    const [slide, setSlide] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1))
        }, 5000)

        return () => clearInterval(interval)
    }, [data.length])

    return (
        <>
            <div className={styles.Carousel}>
                <div
                    className={styles.CarouselTrack}
                    style={{ transform: `translateX(-${slide * 55}vw)` }}
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
