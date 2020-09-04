const express = require('express')

const app = express()
const PORT = process.env.PORT || 2020

app.get('/', (req, res) => {
   res.send('Server started')
})

app.listen(PORT, () => {
   console.log(`Server has been started on port: ${PORT}
   http://localhost:${PORT}
   `)
})