const express = require('express')
const app = express()
const ejs = require('ejs')
const  mongoose = require('mongoose')
const expressSession = require ('express-session')
const bodyParser = require ('body-parser')
const flash = require ('connect-flash')

//Connection Database (MongoDB)
mongoose.connect('mongodb+srv://admin:<admin>@seez.izo4qp4.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true
})

//Controller
const indexController = require ('./controllers/indexController')

//MiddleWare
//const authMiddleware = require('./middleware/authMiddleware')

app.use(express.static('public'))
//Use Json & URL-encoded body parser middleware
app.use(express.json())
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }));
app.use(flash())
app.use(expressSession({
    secret:'secret',
}))
app.use('*', (req,res) => {
    loggedIn = req.session.UserId
    next()
})
app.set('view engine', 'ejs')

app.get('/', (req,res) => {
    indexController(req.res);
})

app.get('/', indexController)

app.listen(4000, () => {
    console.log("Server is running on port 4000")
})