import { render, screen, fireEvent } from '@testing-library/react'
import ChangeScore from '../ChangeScore'
import type { Match } from '../../types'

const match: Match = {
    id: 1,
    teamA: 'Alpha',
    teamB: 'Beta',
    teamAId: 1,
    teamBId: 2,
    scoreA: 2,
    scoreB: 1,
    round: 1,
    played: true,
}

const matchNoScore: Match = {
    id: 2,
    teamA: 'Gamma',
    teamB: 'Delta',
    round: 1,
    played: false,
}

describe('ChangeScore', () => {
    it('renders the Update Score heading', () => {
        render(
            <ChangeScore
                match={match}
                onConfirm={jest.fn()}
                onCancel={jest.fn()}
            />
        )
        expect(screen.getByText('Update Score')).toBeInTheDocument()
    })

    it('renders both team names as labels', () => {
        render(
            <ChangeScore
                match={match}
                onConfirm={jest.fn()}
                onCancel={jest.fn()}
            />
        )
        expect(screen.getByText('Alpha')).toBeInTheDocument()
        expect(screen.getByText('Beta')).toBeInTheDocument()
    })

    it('pre-fills inputs with the existing scores', () => {
        render(
            <ChangeScore
                match={match}
                onConfirm={jest.fn()}
                onCancel={jest.fn()}
            />
        )
        const inputs = screen.getAllByRole('spinbutton')
        expect(inputs[0]).toHaveValue(2)
        expect(inputs[1]).toHaveValue(1)
    })

    it('defaults inputs to 0 when scoreA/scoreB are undefined', () => {
        render(
            <ChangeScore
                match={matchNoScore}
                onConfirm={jest.fn()}
                onCancel={jest.fn()}
            />
        )
        const inputs = screen.getAllByRole('spinbutton')
        expect(inputs[0]).toHaveValue(0)
        expect(inputs[1]).toHaveValue(0)
    })

    it('calls onCancel when the Cancel button is clicked', () => {
        const onCancel = jest.fn()
        render(
            <ChangeScore
                match={match}
                onConfirm={jest.fn()}
                onCancel={onCancel}
            />
        )
        fireEvent.click(screen.getByText('Cancel'))
        expect(onCancel).toHaveBeenCalledTimes(1)
    })

    it('calls onConfirm with the current scores when Confirm is clicked', () => {
        const onConfirm = jest.fn()
        render(
            <ChangeScore
                match={match}
                onConfirm={onConfirm}
                onCancel={jest.fn()}
            />
        )
        fireEvent.click(screen.getByText('Confirm'))
        expect(onConfirm).toHaveBeenCalledWith(2, 1)
    })

    it('calls onConfirm with updated scores after the user edits inputs', () => {
        const onConfirm = jest.fn()
        render(
            <ChangeScore
                match={match}
                onConfirm={onConfirm}
                onCancel={jest.fn()}
            />
        )
        const inputs = screen.getAllByRole('spinbutton')
        fireEvent.change(inputs[0], { target: { value: '5' } })
        fireEvent.change(inputs[1], { target: { value: '3' } })
        fireEvent.click(screen.getByText('Confirm'))
        expect(onConfirm).toHaveBeenCalledWith(5, 3)
    })

    it('clamps score input to 0 when a negative value is entered', () => {
        render(
            <ChangeScore
                match={match}
                onConfirm={jest.fn()}
                onCancel={jest.fn()}
            />
        )
        const inputs = screen.getAllByRole('spinbutton')
        fireEvent.change(inputs[0], { target: { value: '-5' } })
        expect(inputs[0]).toHaveValue(0)
    })

    it('clamps score input to 9999 when a value over the max is entered', () => {
        render(
            <ChangeScore
                match={match}
                onConfirm={jest.fn()}
                onCancel={jest.fn()}
            />
        )
        const inputs = screen.getAllByRole('spinbutton')
        fireEvent.change(inputs[0], { target: { value: '99999' } })
        expect(inputs[0]).toHaveValue(9999)
    })
})
