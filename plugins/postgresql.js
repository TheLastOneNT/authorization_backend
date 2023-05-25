'use strict'

require('dotenv').config()
const fp = require('fastify-plugin')
const pgp = require('pg-promise')()
const UserService = require('../services/users/userService')

// the use of fastify-plugin is required to be able
// to export the plugin in a way that Fastify can consume it.
module.exports = fp(async function (fastify, opts) {
  const db = pgp({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    ssl: {
      rejectUnauthorized: false // Be cautious with this setting in a production environment
    }
  })

  fastify.decorate('db', db) // main Database instance

  const userService = UserService(db)
  fastify.decorate('user', userService)
})
