import styles from './TeamForm.module.scss'
import { useState } from 'react'
import { useCreateTeam } from '../../hooks/useCreateTeam'

type TeamMember = {
    name: string
    surname: string
    nickname: string
}

const TeamForm = () => {
    const [teamName, setTeamName] = useState('')
    const [memberCount, setMemberCount] = useState(2)
    const [teamMembers, setTeamMembers] = useState<TeamMember[]>(
        Array(2).fill({ name: '', surname: '', nickname: '' })
    )
    const { mutate, isPending, isError, error } = useCreateTeam()

    const handleCountChange = (value: number) => {
        const clamped = Math.max(1, Math.min(32, value))
        setMemberCount(clamped)
        setTeamMembers((prev) => {
            const next = [...prev]
            while (next.length < clamped)
                next.push({ name: '', surname: '', nickname: '' })
            return next.slice(0, clamped)
        })
    }

    const handleMemberChange = (
        index: number,
        field: keyof TeamMember,
        value: string
    ) => {
        setTeamMembers((prev) => {
            const next = [...prev]
            next[index] = { ...next[index], [field]: value }
            return next
        })
    }

    const handleSubmit = () => {
        if (!teamName.trim()) return
        const filledTeamMembers = teamMembers
            .filter((m) => m.name.trim() || m.surname.trim() || m.nickname.trim())
            .map((m) => ({
                name: m.name.trim(),
                surname: m.surname.trim(),
                nickname: m.nickname.trim() || undefined,
            }))
        mutate({
            name: teamName.trim(),
            teamMember: filledTeamMembers.length > 0 ? filledTeamMembers : undefined,
        })
    }

    return (
        <div className={styles.TeamForm}>
            <h2 className={styles.TeamFormTitle}>Set up your team</h2>

            <div className={styles.TeamFormField}>
                <label className={styles.TeamFormFieldLabel} htmlFor="team_name">
                    Team name
                </label>
                <input
                    className={styles.TeamFormFieldInput}
                    id="team_name"
                    type="text"
                    placeholder="e.g. ZSK Counter-Strike Team Alpha"
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                />
            </div>

            <div className={styles.TeamFormField}>
                <label className={styles.TeamFormFieldLabel} htmlFor="member_count">
                    Number of members
                </label>
                <div className={styles.TeamFormFieldCounter}>
                    <button
                        className={styles.TeamFormFieldCounterBtn}
                        onClick={() => handleCountChange(memberCount - 1)}
                        type="button"
                    >
                        −
                    </button>
                    <input
                        className={`${styles.TeamFormFieldInput} ${styles.TeamFormFieldCounterInput}`}
                        id="member_count"
                        type="number"
                        min={1}
                        max={32}
                        value={memberCount}
                        onChange={(e) => handleCountChange(parseInt(e.target.value) || 1)}
                    />
                    <button
                        className={styles.TeamFormFieldCounterBtn}
                        onClick={() => handleCountChange(memberCount + 1)}
                        type="button"
                    >
                        +
                    </button>
                </div>
            </div>

            <div className={styles.TeamFormField}>
                <label className={styles.TeamFormFieldLabel} htmlFor="members_list">
                    Members
                </label>
                <div className={styles.TeamFormFieldMemberGrid}>
                    <div className={styles.TeamFormFieldMemberGridHeader}>
                        <span />
                        <span>First name</span>
                        <span>Nickname</span>
                        <span>Last name</span>
                    </div>
                    {teamMembers.map((m, index) => (
                        <div key={index} className={styles.TeamFormFieldMemberGridRow}>
                            <span className={styles.TeamFormFieldMemberGridRowIndex}>
                                {index + 1}
                            </span>
                            <input
                                className={styles.TeamFormFieldInput}
                                type="text"
                                placeholder="Janusz"
                                value={m.name}
                                onChange={(e) => handleMemberChange(index, 'name', e.target.value)}
                            />
                            <div className={styles.TeamFormFieldNicknameWrapper}>
                                <span className={styles.TeamFormFieldNicknameQuote}>"</span>
                                <input
                                    className={`${styles.TeamFormFieldInput} ${styles.TeamFormFieldNicknameInput}`}
                                    type="text"
                                    placeholder="Snax"
                                    value={m.nickname}
                                    onChange={(e) => handleMemberChange(index, 'nickname', e.target.value)}
                                />
                                <span className={styles.TeamFormFieldNicknameQuote}>"</span>
                            </div>
                            <input
                                className={styles.TeamFormFieldInput}
                                type="text"
                                placeholder="Pogorzelski"
                                value={m.surname}
                                onChange={(e) => handleMemberChange(index, 'surname', e.target.value)}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {isError && (
                <p className={styles.TeamFormError}>{error?.message}</p>
            )}

            <button
                className={styles.TeamFormSubmitBtn}
                onClick={handleSubmit}
                disabled={isPending}
                type="button"
            >
                {isPending ? 'Creating…' : 'Create Team'}
            </button>
        </div>
    )
}

export default TeamForm