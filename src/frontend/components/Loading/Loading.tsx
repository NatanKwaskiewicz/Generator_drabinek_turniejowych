import styles from './Loading.module.scss'
import { ThreeDots } from 'react-loader-spinner'

const Loading = () => {
    return (
        <div className={styles.Loading}>
            <ThreeDots color="#4fc3f7" />
        </div>
    )
}

export default Loading
