import express from 'express'
import cors from 'cors'
import './config/db'
import teamsRouter from './routes/teamsRouter'
import playersRouter from './routes/playersRouter'
import matchesRouter from './routes/matchesRouter'

// configuration
const app = express()
app.use(express.json()) // middleware for parsing re.body to application/json
app.use(cors()) // middleware for cors

const PORT = 3001

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

// Routes
app.get('/ping', (_, res) => { // _ is req, used to ignore it "_" is a convention for unused variables in typescript
  console.log('ping')
  res.send('Hello World! ' + new Date().toISOString())
})

app.use('/api/teams', teamsRouter)
app.use('/api/players', playersRouter)
app.use('/api/matches', matchesRouter)
