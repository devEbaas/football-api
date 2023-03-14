import { Schema, model } from 'mongoose'

const TeamSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    logo: { type: String, required: false },
    shortName: { type: String, required: true },
    city: { type: String, required: true }
  },
  {
    versionKey: false,
    timestamps: true
  }
)

export default model('Team', TeamSchema)
