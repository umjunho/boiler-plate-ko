const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect( 'mongodb+srv://wns3147:djawns5426@cluster0.80nj4s5.mongodb.net/?retryWrites=true&w=majority',{
    // useNewUrlParser : true, useUnifiedTopology : true, useCreateIndex : true, useFindAndModify : false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
    res.send('Hello World! 안녕하세요~')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})