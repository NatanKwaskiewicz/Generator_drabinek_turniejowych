import { Router } from 'express'
import {
    getMatches,
    generateMatches,
    generateRoundRobinMatches,
    generateSwissMatches,
    advanceSwissRound,
    advanceRound,
    updateMatchScore,
} from '../controllers/matchesController.ts'

const router = Router()

router.get('/', getMatches)
router.post('/generate/:tournamentId', generateMatches)
router.post('/generate-round-robin/:tournamentId', generateRoundRobinMatches)
router.post('/generate-swiss/:tournamentId', generateSwissMatches)
router.post('/advance/:tournamentId/:round', advanceRound)
router.post('/advance-swiss/:tournamentId/:round', advanceSwissRound)
router.patch('/:id', updateMatchScore)

export default router
