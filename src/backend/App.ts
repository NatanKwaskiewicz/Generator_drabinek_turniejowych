import express from 'express'
import cors from 'cors'
import tournamentRouter from './routes/tournamentsRouter.ts'
import participantRouter from './routes/participantsRouter.ts'
import teamRouter from './routes/teamsRouter.ts'

const app = express()
app.use(express.json())

app.use(
    cors({
        origin: 'http://localhost:5173',
    })
)

app.use('/tournaments', tournamentRouter)
app.use('/participants', participantRouter)
app.use('/teams', teamRouter)

export default app
