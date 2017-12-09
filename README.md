## NODE ES6
[![Build Status](https://travis-ci.org/yuttasakcom/NodeES6.svg?branch=master)](https://travis-ci.org/yuttasakcom/NodeES6)

## Table of Contents
- [Server](#server)
- [Routes](#routes)
- [Test](#test)
- [Docker](#dokcer)

## Server
```javascript
// Module dependencies.
import express from 'express'
import routes from './routes'

// Create Express server.
const app = express()

// Express configuration.
app.set('host', process.env.HOST || 'localhost')
app.set('port', process.env.PORT || 3000)

// Routes.
routes(app)

// Start Express server.
app.listen(app.get('port'), `'${app.get('host')}'`, err => {
  if (err) throw err
  console.log(`Server running at ${app.get('host')}:${app.get('port')}`)
})

// Export for test
module.exports = app

```

## Routes
```javascript
const router = app => {
  app.use('/', (req, res) => {
    res.end('Welcome to NODE ES6')
  })
}

export default router

```

## Test
```javascript
import supertest from 'supertest'

const request = supertest('http://localhost:3000')

describe('GET /', () => {
  it('should return Welcome to NODE ES6 response', () => {
    request.get('/').expect('Welcome to NODE ES6')
  })
})

```

## Docker
```
## for connect nginx reverse proxy
$ docker network create proxy

## start container
$ docker-compose up -d --build
```