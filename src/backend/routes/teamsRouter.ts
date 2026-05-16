import { Router } from 'express'
import {
    getOneTeam,
    getTeams,
    postTeam,
} from '../controllers/teamsController.ts'
const router = Router()
router.get('/', getTeams)
router.get('/:id', getOneTeam)
router.post('/', postTeam)
export default router
