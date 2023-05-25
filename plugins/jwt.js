'use strict'

const fp = require('fastify-plugin')

/**
 * JWT auth
 * @see https://github.com/fastify/fastify-jwt
 */
module.exports = fp(async function (fastify, opts) {
  fastify.register(require('@fastify/jwt'), {
    secret: 'SgVkYp3s6v9y$B&E)H@McQfTjWmZq4t7'
  })
})
