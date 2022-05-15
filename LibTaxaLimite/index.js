const express = require('express')
const rateLimit = require('express-rate-limit')

const app = express()
const PORT = 3000

const apiRequestLimiter = rateLimit({
    windowWs: 60000,
    max: 2,
    message: "Your limit exceded"
})

app.use(apiRequestLimiter)

app.get('/', (req,res) => {
    return res.send("Acessou a rota")
})

app.listen(PORT, () => {
    console.log("Rota está funcionando")
})