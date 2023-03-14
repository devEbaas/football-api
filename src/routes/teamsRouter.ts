import express from 'express'
import Team from '../schemas/TeamModel'

const router = express.Router()

router.get('/', (_, res) => {
  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  Team.find({}).exec().then(teams => {
    res.json(teams)
  }).catch(err => {
    console.log(err)
  })
})

router.get('/:id', (req, res) => {
  res.send(`Team with id ${req.params.id}`)
})

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.post('/', async (req, res) => {
  const newTeam = await new Team(req.body).save()
  res.json(newTeam)
})

export default router
