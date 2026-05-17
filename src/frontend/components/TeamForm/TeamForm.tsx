import styles from './TeamForm.module.scss'
import { useState } from 'react'
import { useNavigate } from 'react-router'

type Participant = {
    name: string
    surname: string
    nickname: string
}

type SubmitState = 'idle' | 'loading' | 'error'

const TeamForm = () => {
    const [teamName, setTeamName] = useState('')
    const [participantCount, setParticipantCount] = useState(2)
    const [participants, setParticipants] = useState<Participant[]>(
        Array(2).fill({ name: '', surname: '', nickname: '' })
    )
    const [submitState, setSubmitState] = useState<SubmitState>('idle')
    const [errorMessage, setErrorMessage] = useState('')
    const navigate = useNavigate()

    const handleCountChange = (value: number) => {
        const clamped = Math.max(1, Math.min(32, value))
        setParticipantCount(clamped)
        setParticipants((prev) => {
            const next = [...prev]
            while (next.length < clamped)
                next.push({ name: '', surname: '', nickname: '' })
            return next.slice(0, clamped)
        })
    }

    const handleParticipantChange = (
        index: number,
        field: keyof Participant,
        value: string
    ) => {
        setParticipants((prev) => {
            const next = [...prev]
            next[index] = { ...next[index], [field]: value }
            return next
        })
    }

    const handleSubmit = async () => {
        if (!teamName.trim()) {
            setErrorMessage('Team name is required.')
            setSubmitState('error')
            return
        }

        const filledParticipants = participants
            .filter((p) => p.name.trim() || p.surname.trim() || p.nickname.trim())
            .map((p) => ({
                name: p.name.trim(),
                surname: p.surname.trim(),
                nickname: p.nickname.trim() || undefined,
            }))

        setSubmitState('loading')
        setErrorMessage('')

        try {
            const response = await fetch('http://localhost:3000/teams', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: teamName.trim(),
                    participants:
                        filledParticipants.length > 0
                            ? filledParticipants
                            : undefined,
                }),
            })

            if (!response.ok) {
                const text = await response.text()
                throw new Error(text || `Server error: ${response.status}`)
            }

            navigate('/bracketGenerator')
        } catch (err) {
            setErrorMessage(
                err instanceof Error ? err.message : 'Unknown error occurred.'
            )
            setSubmitState('error')
        }
    }

    return (
        <div className={styles.TeamForm}>
            <h2 className={styles.TeamFormTitle}>Set up your team</h2>

            <div className={styles.TeamFormField}>
                <label
                    className={styles.TeamFormFieldLabel}
                    htmlFor="team_name"
                >
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
                <label
                    className={styles.TeamFormFieldLabel}
                    htmlFor="participants_count"
                >
                    Number of members
                </label>
                <div className={styles.TeamFormFieldCounter}>
                    <button
                        className={styles.TeamFormFieldCounterBtn}
                        onClick={() => handleCountChange(participantCount - 1)}
                        type="button"
                    >
                        −
                    </button>
                    <input
                        className={`${styles.TeamFormFieldInput} ${styles.TeamFormFieldCounterInput}`}
                        id="participants_count"
                        type="number"
                        min={1}
                        max={32}
                        value={participantCount}
                        onChange={(e) =>
                            handleCountChange(parseInt(e.target.value) || 1)
                        }
                    />
                    <button
                        className={styles.TeamFormFieldCounterBtn}
                        onClick={() => handleCountChange(participantCount + 1)}
                        type="button"
                    >
                        +
                    </button>
                </div>
            </div>

            <div className={styles.TeamFormField}>
                <label
                    className={styles.TeamFormFieldLabel}
                    htmlFor="members_list"
                >
                    Members
                </label>
                <div className={styles.TeamFormFieldMemberGrid}>
                    <div className={styles.TeamFormFieldMemberGridHeader}>
                        <span />
                        <span>First name</span>
                        <span>Nickname</span>
                        <span>Last name</span>
                    </div>
                    {participants.map((p, index) => (
                        <div
                            key={index}
                            className={styles.TeamFormFieldMemberGridRow}
                        >
                            <span
                                className={
                                    styles.TeamFormFieldMemberGridRowIndex
                                }
                            >
                                {index + 1}
                            </span>
                            <input
                                className={styles.TeamFormFieldInput}
                                type="text"
                                placeholder="Janusz"
                                value={p.name}
                                onChange={(e) =>
                                    handleParticipantChange(
                                        index,
                                        'name',
                                        e.target.value
                                    )
                                }
                            />
                            <div className={styles.TeamFormFieldNicknameWrapper}>
                                <span className={styles.TeamFormFieldNicknameQuote}>"</span>
                                <input
                                    className={`${styles.TeamFormFieldInput} ${styles.TeamFormFieldNicknameInput}`}
                                    type="text"
                                    placeholder="Snax"
                                    value={p.nickname}
                                    onChange={(e) =>
                                        handleParticipantChange(
                                            index,
                                            'nickname',
                                            e.target.value
                                        )
                                    }
                                />
                                <span className={styles.TeamFormFieldNicknameQuote}>"</span>
                            </div>
                            <input
                                className={styles.TeamFormFieldInput}
                                type="text"
                                placeholder="Pogorzelski"
                                value={p.surname}
                                onChange={(e) =>
                                    handleParticipantChange(
                                        index,
                                        'surname',
                                        e.target.value
                                    )
                                }
                            />
                        </div>
                    ))}
                </div>
            </div>

            {submitState === 'error' && (
                <p className={styles.TeamFormError}>{errorMessage}</p>
            )}

            <button
                className={styles.TeamFormSubmitBtn}
                onClick={handleSubmit}
                disabled={submitState === 'loading'}
                type="button"
            >
                {submitState === 'loading' ? 'Creating…' : 'Create Team'}
            </button>
        </div>
    )
}

export default TeamForm
