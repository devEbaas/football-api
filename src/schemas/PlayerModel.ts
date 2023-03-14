import { Schema, model } from 'mongoose'

const PlayerSchema = new Schema(
  {
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    position: { type: String, required: false },
    age: { type: Number, required: false },
    currentTeam: { type: String, required: true }
  },
  {
    versionKey: false,
    timestamps: true
  }
)

export default model('Player', PlayerSchema)
