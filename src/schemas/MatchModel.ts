import { Schema, model } from 'mongoose'

const MatchSchema = new Schema(
  {
    homeTeam: { type: String, required: true },
    awayTeam: { type: String, required: true },
    homeTeamScore: { type: Number, required: true },
    awayTeamScore: { type: Number, required: true },
    winner: { type: String, required: true },
    yellowCards: { type: Number, required: true },
    redCards: { type: Number, required: true },
    date: { type: Date, required: true }
  },
  {
    versionKey: false,
    timestamps: true
  }
)

export default model('Match', MatchSchema)
