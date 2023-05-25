'use strict'

const fp = require('fastify-plugin')

/**
 * CORS
 * @see https://github.com/fastify/fastify-cors
 */
module.exports = fp(async function (fastify, opts) {
  // Define the allowed list array.
  const whitelist = [
    'http://127.0.0.1:3000',
    'http://localhost:3000',
    'http://localhost:3001',
    'http://localhost:3002',
    'https://inventory.empirecitylabs.com',
    'https://dancing-pavlova-78ff83.netlify.app'
  ]

  fastify.register(require('@fastify/cors'), (instance) => {
    return (req, callback) => {
      const corsOptions = {
        // Configures the Access-Control-Allow-Methods CORS header.
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],

        // Configures the Access-Control-Allow-Headers CORS header.
        allowedHeaders: ['Content-Type', 'Authorization'],

        // Configures the Access-Control-Allow-Credentials CORS header.
        credentials: true,

        // The Access-Control-Max-Age CORS header.
        maxAge: 600 // 10 minutes
      }

      // If the origin of the request is in the pass list, reflect the request origin.
      if (whitelist.includes(req.headers.origin)) {
        corsOptions.origin = req.headers.origin
      } else {
        // If not, disable CORS for this request.
        corsOptions.origin = false
      }

      // callback expects two parameters: error and options
      callback(null, corsOptions)
    }
  })
})
