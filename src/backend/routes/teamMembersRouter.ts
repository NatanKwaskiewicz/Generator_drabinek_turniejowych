import { Router } from 'express'
import {
    getOneTeamMember,
    getTeamMembers,
    postTeamMember,
} from '../controllers/teamMembersController.ts'
const router = Router()
router.get('/', getTeamMembers)
router.get('/:id', getOneTeamMember)
router.post('/', postTeamMember)
export default router
