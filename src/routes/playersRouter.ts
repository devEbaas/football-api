import express from 'express'
import Player from '../schemas/PlayerModel'

const router = express.Router()

router.get('/', (_, res) => {
  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  Player.find({}).exec().then(players => {
    res.json(players)
  }).catch(err => {
    console.log(err)
  })
})

router.get('/:id', (req, res) => {
  res.send(`Player with id ${req.params.id}`)
})

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.post('/', async (req, res) => {
  const newPlayer = await new Player(req.body).save()
  res.json(newPlayer)
})

export default router
