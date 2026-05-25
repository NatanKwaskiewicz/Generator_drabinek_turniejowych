import styles from './FormatGrid.module.scss'
import Format from '../Format'
import type { Format as FormatType } from '../../types'

interface FormatGridProps {
    formats: FormatType[] | undefined
}

const FormatGrid = ({ formats }: FormatGridProps) => {
    return (
        <div className={styles.FormatGrid}>
            {formats?.map((format, index) => (
                <Format
                    key={index}
                    name={format.name}
                    description={format.description}
                    image_path={format.image_path}
                />
            ))}
        </div>
    )
}

export default FormatGrid
