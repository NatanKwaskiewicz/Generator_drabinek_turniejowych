import { Router } from 'express';
import { getOneTournament, getTournaments, postTournament} from "../controllers/tournamentController.ts"
const router = Router();
router.get('/', getTournaments);
router.get('/:id', getOneTournament);
router.post('/', postTournament);
export default router;