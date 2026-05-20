import styles from './Bracket.module.scss'
import BracketGraph from '../BracketGraph'
import rounds from '../../data/bracketData.ts'

const Bracket = () => {
    return (
        <div className={styles.Bracket}>
            <BracketGraph rounds={rounds} />
        </div>
    )
}

export default Bracket
