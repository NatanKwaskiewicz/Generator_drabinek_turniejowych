import 'dotenv/config'
import app from './App.ts'
const hostname: string = process.env.HOSTNAME ?? 'localhost'
const port: number = Number(process.env.PORT)

app.listen(port, hostname, () => {
    console.log(`Server started at http://${hostname}:${port}`)
})
