import styles from './BracketSettings.module.scss'
import { useState } from 'react'

const BracketSettings = () => {
    const [expanded, setExpanded] = useState(true)

    return (
        <div
            className={`${styles.BracketSettings} ${expanded ? styles.BracketSettingsExpanded : styles.BracketSettingsCollapsed}`}
        >
            <button
                className={styles.BracketSettingsToggle}
                onClick={() => setExpanded((prev) => !prev)}
                aria-label={expanded ? 'Collapse settings' : 'Expand settings'}
            >
                {expanded ? <>&#10006;</> : <>&#9881;</>}
            </button>
            {expanded && <div className={styles.BracketSettingsContent}></div>}
        </div>
    )
}

export default BracketSettings
