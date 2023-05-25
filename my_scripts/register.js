const axios = require('axios')

async function registerNewUser (...args) {
  try {
    const response = await axios.post('http://127.0.0.1:3000/register', {
      password: args[0],
      firstName: args[1],
      lastName: args[2],
      email: args[3],
      role: args[4]
    })
    console.log(response.data)
  } catch (error) {
    console.error(error.response.data)
  }
}

(async () => {
  await registerNewUser(
    '2020Empire229',
    'Serhii',
    'Zelenchuk',
    'zelenchyks@gmail.com',
    1)
})()
