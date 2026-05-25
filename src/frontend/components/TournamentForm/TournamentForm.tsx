import styles from './TournamentForm.module.scss'
import { useState } from 'react'
import Format from '../Format'
import { useCreateTournament } from '../../hooks/useCreateTournament.ts'
import { useTeams } from '../../hooks/useTeams.ts'
import { useFormats } from '../../hooks/useFormats.ts'

const TournamentForm = () => {
    const [name, setName] = useState('')
    const [format, setFormat] = useState<number>(1)
    const [hoveredFormat, setHoveredFormat] = useState<string | null>(null)
    const [selectedTeamIds, setSelectedTeamIds] = useState<number[]>([])
    const [validationError, setValidationError] = useState('')
    const { mutate, isPending, isError, error } = useCreateTournament()
    const { data: teams, isLoading: teamsLoading } = useTeams()
    const {
        data: formats,
        isLoading: formatsLoading,
        isError: formatsError,
    } = useFormats()
    const allowedTeamCount = [2, 4, 8, 16, 32, 64, 128]

    const handleTeamToggle = (id: number) => {
        setSelectedTeamIds((prev) =>
            prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
        )
    }

    const activeFormatId = format ?? formats?.[0]?.id

    const selectedFormat = formats?.find((f) => f.id === activeFormatId)

    const isEliminationFormat =
        selectedFormat?.name === 'Single elimination' ||
        selectedFormat?.name === 'Double elimination'

    const handleSubmit = () => {
        if (!name.trim()) {
            setValidationError('Tournament name is required')
            return
        }

        if (
            isEliminationFormat &&
            !allowedTeamCount.includes(selectedTeamIds.length)
        ) {
            setValidationError(
                'Single and double elimination formats require 2, 4, 8, 16, 32, 64, or 128 teams.'
            )
            return
        }

        mutate({
            name: name.trim(),
            date: new Date().toISOString(),
            formatId: activeFormatId,
            teams: selectedTeamIds.map((id) => ({ teamId: id })),
        })
    }

    if (error) console.error(error)
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
                    {formatsLoading ? (
                        <p className={styles.TournamentFormInfo}>
                            Loading formats...
                        </p>
                    ) : formatsError ? (
                        <p className={styles.TournamentFormError}>
                            Failed to load formats.
                        </p>
                    ) : (
                        <div className={styles.TournamentFormFieldFormatPicker}>
                            {formats?.map((f) => (
                                <div
                                    key={f.id}
                                    className={
                                        styles.TournamentFormFieldFormatPickerOption
                                    }
                                    onMouseEnter={() =>
                                        setHoveredFormat(f.name)
                                    }
                                    onMouseLeave={() => setHoveredFormat(null)}
                                >
                                    <button
                                        className={`${styles.TournamentFormFieldFormatPickerOptionBtn} ${
                                            activeFormatId === f.id
                                                ? styles.TournamentFormFieldFormatPickerOptionBtnActive
                                                : ''
                                        }`}
                                        onClick={() => setFormat(f.id)}
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
                                                image_path={f.image_path}
                                            />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <div className={styles.TournamentFormField}>
                <label className={styles.TournamentFormFieldLabel}>Teams</label>
                {teamsLoading ? (
                    <p className={styles.TournamentFormInfo}>
                        Loading teams...
                    </p>
                ) : !teams?.length ? (
                    <p className={styles.TournamentFormInfo}>
                        No teams registered yet.
                    </p>
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
                {isEliminationFormat && (
                    <p className={styles.TournamentFormFieldSize}>
                        Allowed sizes: 2, 4, 8, 16, 32, 64, 128
                    </p>
                )}
            </div>

            {isError && (
                <p className={styles.TournamentFormError}>
                    Error adding tournament.
                </p>
            )}

            {validationError && (
                <p className={styles.TournamentFormError}>{validationError}</p>
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
