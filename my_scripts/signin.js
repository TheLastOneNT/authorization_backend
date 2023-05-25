const axios = require('axios')

async function signIn (email, password) {
  try {
    const response = await axios.post('http://0.0.0.0:8001/signin', {
      email,
      password
    })
    console.log(response.data)
  } catch (error) {
    console.error(error.response.data)
  }
}

(async () => {
  await signIn('zelenchyks@gmail.com', '2020Empire229')
})()
