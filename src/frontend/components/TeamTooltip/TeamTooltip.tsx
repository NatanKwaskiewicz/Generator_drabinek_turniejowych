import styles from './TeamTooltip.module.scss'
import { useTeam } from '../../hooks/useTeam'
import { createPortal } from 'react-dom'

interface TeamTooltipProps {
    teamId: number
    position: { top: number; left: number }
}

const TeamTooltip = ({ teamId, position }: TeamTooltipProps) => {
    const { data: team, isLoading } = useTeam(teamId)
    return createPortal(
        <div
            className={styles.TeamTooltip}
            style={{ top: position.top, left: position.left }}
        >
            {isLoading && (
                <span className={styles.TeamTooltipLoading}>Loading...</span>
            )}
            {!isLoading && team && (
                <>
                    <span className={styles.TeamTooltipName}>{team.name}</span>
                    {!team.teamMembers || team.teamMembers.length === 0 ? (
                        <span className={styles.TeamTooltipEmpty}>
                            No members
                        </span>
                    ) : (
                        <ul className={styles.TeamTooltipList}>
                            {team.teamMembers.map((m) => (
                                <li
                                    key={m.id}
                                    className={styles.TeamTooltipListItem}
                                >
                                    <span
                                        className={
                                            styles.TeamTooltipListItemName
                                        }
                                    >
                                        {m.name}
                                        {m.nickname && (
                                            <span
                                                className={
                                                    styles.TeamTooltipListItemNickname
                                                }
                                            >
                                                {' '}
                                                "{m.nickname}"
                                            </span>
                                        )}{' '}
                                        {m.surname}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    )}
                </>
            )}
        </div>,
        document.body
    )
}

export default TeamTooltip
