const express = require('express')
const mongoose = require('mongoose')

const userRoute = require('./user')
const prodsRoute = require('./products')
const booksRoute = require('./books')


var cors = require('cors')

const app = express()

app.use(cors())

const PORT = 3001

mongoose.connect('mongodb+srv://engrshahidullah:shah.nov19@cluster1.mor2uic.mongodb.net/?retryWrites=true&w=majority')

app.use(express.json())

app.use('/api/user/', userRoute)
app.use('/api/products/', prodsRoute)
app.use('/api/books/', booksRoute)




app.get('/', (req, res) => {
})

app.listen(PORT, () => console.log(`running on port ${PORT}`))
