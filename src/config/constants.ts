import { config } from 'dotenv'
config()

export default {
  mongodbURL: process.env.MONGO_DB_URI as string
}
