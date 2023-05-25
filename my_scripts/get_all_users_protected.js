const axios = require('axios')

async function getUsers (...args) {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImVtYWlsIjoiemVsZW5jaHlrc0BnbWFpbC5jb20iLCJpYXQiOjE2ODQ5NjY5NzMsImV4cCI6MTY4NDk3NDE3M30.s4MXFuZVRzyK0DhjPB818VpylxoVyFCj5PruXm8E4QQ'
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  try {
    const response = await axios.get('http://0.0.0.0:8001/users', config)
    console.log(response.data)
  } catch (error) {
    console.error(error.response.data)
  }
}

(async () => {
  await getUsers()
})()
