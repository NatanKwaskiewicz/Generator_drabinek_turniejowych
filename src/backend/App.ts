import express from 'express'
import cors from 'cors'
import tournamentRouter from './routes/tournamentsRouter.ts'
import teamMembersRouter from './routes/teamMembersRouter.ts'
import teamRouter from './routes/teamsRouter.ts'
import matchesRouter from './routes/matchesRouter.ts'

const app = express()
app.use(express.json())

app.use(
    cors({
        origin: ['http://localhost:5173', 'http://localhost:5174'],
    })
)

app.use('/tournaments', tournamentRouter)
app.use('/teammembers', teamMembersRouter)
app.use('/teams', teamRouter)
app.use('/matches', matchesRouter)

export default app
