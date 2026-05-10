import styles from './FormatGrid.module.scss'
import Format from '../Format/Format'
import type { FormatData } from '../../types'

interface FormatGridProps {
    formats: FormatData[]
}

const FormatGrid = ({ formats }: FormatGridProps) => {
    return (
        <div className={styles.FormatGrid}>
            {formats.map((format, index) => (
                <Format
                    key={index}
                    name={format.name}
                    description={format.description}
                    image={format.image}
                />
            ))}
        </div>
    )
}

export default FormatGrid
