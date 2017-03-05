const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('HEY!')
  console.log('first the req:', req)
  console.log('then the res:', res)
})

app.listen(3000, () => console.log('Server running on port 3000'))
