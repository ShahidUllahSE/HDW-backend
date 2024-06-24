const express = require('express')
const mongoose = require('mongoose')

// const userRoute = require('./user')
// const prodsRoute = require('./products')
const volenteerRoute = require('./volenteer')


var cors = require('cors')
const contactRoute = require('./contact')

const app = express()

app.use(cors())

const PORT = 3001

mongoose.connect('mongodb+srv://shahidullah:shahidwebsite123@websitecluster.qq395sm.mongodb.net/?retryWrites=true&w=majority')

app.use(express.json())

// app.use('/api/user/', userRoute)
// app.use('/api/products/', prodsRoute)
app.use('/api/volenteer/', volenteerRoute)
app.use('/api/contact/', contactRoute)





app.get('/', (req, res) => {
})

app.listen(PORT, () => console.log(`running on port ${PORT}`))
