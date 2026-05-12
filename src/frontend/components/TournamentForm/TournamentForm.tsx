import styles from './TournamentForm.module.scss'
import { useState } from 'react'
import formatData from '../../data/formatData.ts'
import Format from '../Format'

const FORMATS = ['Single elimination', 'Double elimination', 'Round Robin']

const TournamentForm = () => {
    const [name, setName] = useState('')
    const [participantCount, setParticipantCount] = useState(4)
    const [participants, setParticipants] = useState<string[]>(
        Array(4).fill('')
    )
    const [format, setFormat] = useState(FORMATS[0])
    const [hoveredFormat, setHoveredFormat] = useState<string | null>(null)

    const handleCountChange = (value: number) => {
        const clamped = Math.max(2, Math.min(64, value))
        setParticipantCount(clamped)
        setParticipants((prev) => {
            const next = [...prev]
            while (next.length < clamped) next.push('')
            return next.slice(0, clamped)
        })
    }

    const handleParticipantChange = (index: number, value: string) => {
        setParticipants((prev) => {
            const next = [...prev]
            next[index] = value
            return next
        })
    }

    const handleSubmit = () => {
        console.log({ name, participants, format })
    }

    return (
        <div className={styles.TournamentForm}>
            <h2 className={styles.TournamentFormTitle}>
                Set up your tournament
            </h2>

            <div className={styles.TournamentFormField}>
                <label
                    className={styles.TournamentFormFieldLabel}
                    htmlFor="tournament_name"
                >
                    Tournament name
                </label>
                <input
                    className={styles.TournamentFormFieldInput}
                    id="tournament_name"
                    type="text"
                    placeholder="e.g. ZSK Counter-Strike Championship"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className={styles.TournamentFormField}>
                <label
                    className={styles.TournamentFormFieldLabel}
                    htmlFor="format_picker"
                >
                    Format
                </label>
                <div className={styles.TournamentFormFieldFormatPicker}>
                    {formatData.map((f) => (
                        <div
                            key={f.name}
                            className={
                                styles.TournamentFormFieldFormatPickerOption
                            }
                            onMouseEnter={() => setHoveredFormat(f.name)}
                            onMouseLeave={() => setHoveredFormat(null)}
                        >
                            <button
                                className={`${styles.TournamentFormFieldFormatPickerOptionBtn} ${format === f.name ? styles.TournamentFormFieldFormatPickerOptionBtnActive : ''}`}
                                onClick={() => setFormat(f.name)}
                                type="button"
                            >
                                {f.name}
                            </button>
                            {hoveredFormat === f.name && (
                                <div
                                    className={
                                        styles.TournamentFormFieldFormatPickerPreview
                                    }
                                >
                                    <Format
                                        name={f.name}
                                        description={f.description}
                                        image={f.image}
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.TournamentFormField}>
                <label
                    className={styles.TournamentFormFieldLabel}
                    htmlFor="participants_count"
                >
                    Number of participants
                </label>
                <div className={styles.TournamentFormFieldCounter}>
                    <button
                        className={styles.TournamentFormFieldCounterBtn}
                        onClick={() => handleCountChange(participantCount - 1)}
                        type="button"
                    >
                        −
                    </button>
                    <input
                        className={`${styles.TournamentFormFieldInput} ${styles.TournamentFormFieldCounterInput}`}
                        id="participants_count"
                        type="number"
                        min={2}
                        max={64}
                        value={participantCount}
                        onChange={(e) =>
                            handleCountChange(parseInt(e.target.value) || 2)
                        }
                    />
                    <button
                        className={styles.TournamentFormFieldCounterBtn}
                        onClick={() => handleCountChange(participantCount + 1)}
                        type="button"
                    >
                        +
                    </button>
                </div>
            </div>

            <div className={styles.TournamentFormField}>
                <label
                    className={styles.TournamentFormFieldLabel}
                    htmlFor="participants_names"
                >
                    Participants
                </label>
                <div className={styles.TournamentFormFieldParticipantGrid}>
                    {participants.map((p, index) => (
                        <div
                            key={index}
                            className={
                                styles.TournamentFormFieldParticipantGridRow
                            }
                        >
                            <span
                                className={
                                    styles.TournamentFormFieldParticipantGridRowIndex
                                }
                            >
                                {index + 1}
                            </span>
                            <input
                                className={styles.TournamentFormFieldInput}
                                id="participants_names"
                                type="text"
                                placeholder={`Participant ${index + 1}`}
                                value={p}
                                onChange={(e) =>
                                    handleParticipantChange(
                                        index,
                                        e.target.value
                                    )
                                }
                            />
                        </div>
                    ))}
                </div>
            </div>

            <button
                className={styles.TournamentFormSubmitBtn}
                onClick={handleSubmit}
            >
                Create Tournament
            </button>
        </div>
    )
}

export default TournamentForm
