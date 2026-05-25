import styles from './Format.module.scss'
import { useRef } from 'react'

interface FormatProps {
    name: string
    description: string
    image_path?: string
}

const Format = ({ name, description, image_path }: FormatProps) => {
    const imageRef = useRef<HTMLDivElement>(null)

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const el = imageRef.current
        if (!el) return

        const { left, top, width, height } = el.getBoundingClientRect()
        const x = (e.clientX - left) / width - 0.5
        const y = (e.clientY - top) / height - 0.5

        const img = el.querySelector('img') as HTMLImageElement
        if (!img) return

        img.style.transform = `translate(${-x * 100}px, ${-y * 100}px) scale(1.5)`
    }

    const handleMouseLeave = () => {
        const el = imageRef.current
        if (!el) return
        const img = el.querySelector('img') as HTMLImageElement
        if (!img) return
        img.style.transform = 'translate(0px, 0px) scale(1)'
    }

    console.log(image_path)

    return (
        <div className={styles.Format}>
            <div
                className={styles.FormatImage}
                ref={imageRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                {image_path && <img src={image_path} alt={name} />}
            </div>
            <div className={styles.FormatInfo}>
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Format
