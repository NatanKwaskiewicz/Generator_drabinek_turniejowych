import type { Match } from '../types'

export const getWinner = (match: Match): 'A' | 'B' | undefined => {
    if (match.scoreA === undefined || match.scoreB === undefined)
        return undefined
    if (match.scoreA > match.scoreB) return 'A'
    if (match.scoreB > match.scoreA) return 'B'
    return undefined
}
