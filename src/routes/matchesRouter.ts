import express from 'express'
import Match from '../schemas/MatchModel'

const router = express.Router()

router.get('/', (_, res) => {
  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  Match.find({}).exec().then(matches => {
    res.json(matches)
  }).catch(err => {
    console.log(err)
  })
})

router.get('/:id', (req, res) => {
  res.send(`Match with id ${req.params.id}`)
})

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.post('/', async (req, res) => {
  const newMatch = await new Match(req.body).save()
  res.json(newMatch)
})

export default router
