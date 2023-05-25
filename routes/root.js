'use strict'

const bcrypt = require('bcrypt')

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return {
      routes: [
        { method: 'POST', url: '/signin' }
        // { method: 'POST', url: '/register' },
        // include other routes here...
      ]
    }
  })

  fastify.post('/signin', async (request, reply) => {
    try {
      const { email, password } = request.body

      const user = await fastify.user.findUserByEmail(email)

      if (!user || !(await bcrypt.compare(password, user.password))) {
        reply.code(401).send({ error: 'Invalid username or password' })
        return
      }

      // user authenticated, create and sign a new token
      const token = fastify.jwt.sign(
        { userId: user.id }, // the payload
        { expiresIn: '120m' } // set the expiration
      )

      // return the token
      reply.code(200).send({ token, user })
    } catch (err) {
      reply.code(500).send({ error: 'An error occurred during sign in.' })
      console.error(err)
    }
  })

  fastify.post('/register', async (request, reply) => {
    const { password, firstName, lastName, email, role } = request.body

    try {
      await fastify.user.createUser(password, firstName, lastName, email, role)
      reply.code(201).send({ message: 'User created successfully' })
    } catch (error) {
      console.error(error)

      let serverResponse = {
        error: 'Failed to create user'
      }

      if (Object.prototype.hasOwnProperty.call(error, 'detail')) {
        serverResponse = { ...serverResponse, details: error.detail }
      }

      reply.code(500).send(serverResponse)
    }
  })
}
