import { Router } from 'express'
import {
    getOneParticipant,
    getParticipants,
    postParticipant,
} from '../controllers/participantsController.ts'
const router = Router()
router.get('/', getParticipants)
router.get('/:id', getOneParticipant)
router.post('/', postParticipant)
export default router
