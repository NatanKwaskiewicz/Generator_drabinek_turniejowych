import styles from './TournamentForm.module.scss'
import { useState } from 'react'
import formatData from '../../data/formatData.ts'
import Format from '../Format'
import { useCreateTournament } from '../../hooks/useCreateTournament.ts'
import { useTeams } from '../../hooks/useTeams.ts'

const TournamentForm = () => {
    const [name, setName] = useState('')
    const [format, setFormat] = useState(formatData[0].name)
    const [hoveredFormat, setHoveredFormat] = useState<string | null>(null)
    const [selectedTeamIds, setSelectedTeamIds] = useState<number[]>([])
    const { mutate, isPending, isError, error } = useCreateTournament()
    const { data: teams, isLoading: teamsLoading } = useTeams()

    const handleTeamToggle = (id: number) => {
        setSelectedTeamIds((prev) =>
            prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
        )
    }

    const handleSubmit = () => {
        if (!name.trim()) return
        mutate({
            name: name.trim(),
            format,
            date: new Date().toISOString(),
            teams: selectedTeamIds.map((id) => ({ teamId: id })),
        })
    }

    return (
        <div className={styles.TournamentForm}>
            <h2 className={styles.TournamentFormTitle}>
                Set up your tournament
            </h2>

            <div className={styles.TournamentFormField}>
                <label className={styles.TournamentFormFieldLabel} htmlFor="tournament_name">
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
                <label className={styles.TournamentFormFieldLabel} htmlFor="format_picker">
                    Format
                </label>
                <div className={styles.TournamentFormFieldFormatPicker}>
                    {formatData.map((f) => (
                        <div
                            key={f.name}
                            className={styles.TournamentFormFieldFormatPickerOption}
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
                                <div className={styles.TournamentFormFieldFormatPickerPreview}>
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
                <label className={styles.TournamentFormFieldLabel}>
                    Teams
                </label>
                {teamsLoading ? (
                    <p className={styles.TournamentFormInfo}>Loading teams...</p>
                ) : !teams?.length ? (
                    <p className={styles.TournamentFormInfo}>No teams registered yet.</p>
                ) : (
                    <div className={styles.TournamentFormFieldTeamGrid}>
                        {teams.map((team) => (
                            <button
                                key={team.id}
                                className={`${styles.TournamentFormFieldTeamOption} ${
                                    selectedTeamIds.includes(team.id)
                                        ? styles.TournamentFormFieldTeamOptionSelected
                                        : ''
                                }`}
                                onClick={() => handleTeamToggle(team.id)}
                                type="button"
                            >
                                {team.name}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {isError && (
                <p className={styles.TournamentFormError}>{error?.message}</p>
            )}

            <button
                className={styles.TournamentFormSubmitBtn}
                onClick={handleSubmit}
                disabled={isPending}
                type="button"
            >
                {isPending ? 'Creating…' : 'Create Tournament'}
            </button>
        </div>
    )
}

export default TournamentForm