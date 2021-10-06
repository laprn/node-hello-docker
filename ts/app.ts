import express from 'express'
import dotenv from 'dotenv'

dotenv.config()
const app = express()

app.get('/', (req: express.Request, res: express.Response) => {
    res.send('Hello, Node.js, Express, TypeScript, and Docker!')
})

app.listen(process.env.PORT)
console.log(`http://localhost:${process.env.PORT}`)