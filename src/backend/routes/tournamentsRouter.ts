import { Router } from 'express'
import {
    getOneTournament,
    getTournaments,
    postTournament,
    deleteTournament,
} from '../controllers/tournamentController.ts'

const router = Router()
router.get('/', getTournaments)
router.get('/:id', getOneTournament)
router.post('/', postTournament)
router.delete('/:id', deleteTournament)
export default router
