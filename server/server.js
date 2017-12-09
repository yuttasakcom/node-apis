// Module dependencies.
import express from 'express'
import routes from './routes'

// Create Express server.
const app = express()

// Express configuration.
app.set('port', process.env.PORT || 3000)

// Routes.
routes(app)

// Start Express server.
app.listen(app.get('port'), err => {
  if (err) throw err
  console.log(`Server running at localhost:${app.get('port')}`)
})

// Export for test
module.exports = app
