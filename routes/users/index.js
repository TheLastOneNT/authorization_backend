'use strict'

const jwtHook = require('../../hooks/jwtHook')

module.exports = async function (fastify, opts) {
  fastify.get('/', { preHandler: jwtHook }, async (request, reply) => {
    // await request.jwtVerify() // CHECK AUTHORIZATION

    try {
      // Validate limit and offset. If they are not integers or, they are less than 0, return an error
      const limit = parseInt(request.query.limit, 20) || 20
      const offset = parseInt(request.query.offset, 20) || 0

      if (isNaN(limit) || limit <= 0) {
        reply.code(400).send({ error: 'Invalid limit' })
        return
      }

      if (isNaN(offset) || offset < 0) {
        reply.code(400).send({ error: 'Invalid offset' })
        return
      }

      const [users, count] = await Promise.all([
        fastify.user.getAllUsers(limit, offset),
        fastify.user.getCountUsers()
      ])

      // If no users were found, return an error
      if (!users || users.length === 0) {
        reply.code(404).send({ error: 'No users found' })
        return
      }

      // If users were found, return their data
      return { users, count: count.count }
    } catch (err) {
      console.log(err)

      reply.code(500).send({ error: 'An error occurred while fetching users.' })
    }
  })
}
