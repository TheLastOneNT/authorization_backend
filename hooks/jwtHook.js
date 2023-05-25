async function jwtHook (request, reply) {
  try {
    // Execute jwtVerify() for each request
    await request.jwtVerify()
  } catch (error) {
    // Handle JWT verification error
    reply.code(401).send({ error: 'Unauthorized' })
  }
}

module.exports = jwtHook
