require('dotenv').config()
const cors = require('cors')
const express = require("express")
require("./config/database")
const Router = require('./routes/routes')
const passport = require('passport')
const path = require('path')

const PORT = 4000
const app = express()

app.use(cors())
app.use(express.json())
app.use(passport.initialize())
app.use('/api/', Router)

if (process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
    app.get('*', (req, res)=>{
        res.sendFile(path.join(_dirname+'/client/build/index.html'))
    })
}

app.listen ( process.env.PORT || 4000, process.env.HOST || '0.0.0.0' ,() => console.log ("server listening on port ${process.env.PORT || 4000}"))