import { Router } from 'express'
import {
    getFormats
} from '../controllers/formatsController.ts'

const router = Router()

router.get('/', getFormats)

export default router