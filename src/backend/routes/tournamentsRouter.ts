import { Router } from 'express'
import {
    getOneTournament,
    getTournaments,
    postTournament,
    deleteTournament,
    updateTournament,
} from '../controllers/tournamentController.ts'

const router = Router()
router.get('/', getTournaments)
router.get('/:id', getOneTournament)
router.post('/', postTournament)
router.delete('/:id', deleteTournament)
router.patch('/:id', updateTournament)
export default router
