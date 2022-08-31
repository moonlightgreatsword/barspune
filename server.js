require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const {render} = require('ejs')

const app = express()

const PORT = process.env.PORT||4000
app.set('view engine', 'ejs')
// const SESSION_SECRET = process.env.SESSION_SECRET
// app.use(session({
//     secret: SESSION_SECRET,
//     resave: false,
//     saveUninitialized: false
// }))
// app.use((req, res, next) => {
//     res.locals.currentUser = req.session.currentUser
//     next()
// })
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))
app.use(express.static('public'))
//app.use(express.static(path.join(__dirname, 'public')))
const specController = require('./controllers/specController.js')
app.use('/specs', specController)

app.get('/', (req, res) => {
    res.render('home.ejs')
})

app.get((req, res) => {
    res.send('404 error: page not found')
})

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
})