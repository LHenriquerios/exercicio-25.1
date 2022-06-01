const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => res.send(`Está vivo e possui uma ${process.env.LET}`))
app.listen(port, () => console.log(`Pai ta on na porta ${port}!`))