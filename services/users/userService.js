const bcrypt = require('bcrypt')

module.exports = function (db) {
  return {

    findUserByEmail: async (email) => {
      return db.oneOrNone('SELECT * FROM users WHERE email = $1', [email])
    },

    createUser: async (password, firstName, lastName, email, role) => {
      const saltRounds = 10
      const hashedPassword = await bcrypt.hash(password, saltRounds)
      return db.none('INSERT INTO users(password, first_name, last_name, email, role) VALUES($1, $2, $3, $4, $5)', [hashedPassword, firstName, lastName, email, role])
    },

    getAllUsers: async (limit, offset) => {
      return db.manyOrNone('SELECT id, first_name, last_name, email, role FROM users ORDER BY id LIMIT $1 OFFSET $2', [limit, offset])
    },

    getCountUsers: async () => {
      return db.one('SELECT COUNT(*) FROM users')
    }
  }
}
