const logger = require('./middleware/logEvents')
const express = require('express')
const app = express()
const cors =  require('cors')
const PORT = 3500

app.use(logger)

app.use(cors({
    origin: 'http://127.0.0.1:5500',
    optionsSuccessStatus: 200
}))

app.get('/fetch',(req,res) => {
    res.json({ 
        name:"amaan",
        age:"19" 
    })
})

app.listen(PORT,() => {
    console.log(`server is running on ${PORT}`)
})