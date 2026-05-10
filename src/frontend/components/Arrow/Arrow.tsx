import styles from './Arrow.module.scss'

interface ArrowProps {
    size?: number
    color?: string
}

const Arrow = ({ size = 24, color = 'currentColor' }: ArrowProps) => {
    return (
        <svg
            className={styles.Arrow}
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
        >
            <line
                x1="0"
                y1="12"
                x2="22"
                y2="12"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
            />
            <polyline
                points="15,5 22,12 15,19"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
            />
        </svg>
    )
}

export default Arrow
