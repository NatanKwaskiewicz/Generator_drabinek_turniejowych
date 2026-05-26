import 'dotenv/config'
import app from './App.ts'
const hostname: string = process.env.HOSTNAME ?? '0.0.0.0'
const port: number = Number(process.env.PORT) || 3000

app.listen(port, hostname, () => {
    console.log(`Server started at http://${hostname}:${port}`)
})
