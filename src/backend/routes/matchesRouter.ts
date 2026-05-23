import { Router } from 'express'
import {
    getMatches,
    generateMatches,
    generateRoundRobinMatches,
    advanceRound,
    updateMatchScore,
} from '../controllers/matchesController.ts'

const router = Router()

router.get('/', getMatches)
router.post('/generate/:tournamentId', generateMatches)
router.post('/generate-round-robin/:tournamentId', generateRoundRobinMatches)
router.post('/advance/:tournamentId/:round', advanceRound)
router.patch('/:id', updateMatchScore)

export default router
