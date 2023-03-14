import config from './constants'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const mongoose = require('mongoose')

const URI_DB: string = config.mongodbURL;

// eslint-disable-next-line @typescript-eslint/no-floating-promises
(async () => {
  const db = await mongoose.connect(URI_DB)
  console.log('Database is connected to: ', db.connection.name)
})()
