const express = require('express')
const { Spec } = require('../models')
const router = express.Router()
const db = require('../models')
const specSeeds = require('../models/specseeds')

// const authRequired = (req, res, next) => {
//     if(req.session.currentUser){
//         next()
//     } else {
//         res.send('You must be logged in to do that')
//     }
// }

// index route
router.get('/', async (req, res) => {
    let specs = await db.Spec.find({})
    res.render('index.ejs', {specs})
})

// // seed route
// router.get('/seed', (req, res) => {
//     db.Spec.create(specSeeds, (err, data) => {
//         res.redirect('/specs')
//     })
// })

// new
router.get('/new', (req, res) => {
    res.render('new.ejs')
})

// show
router.get('/:id', async (req, res) => {
    const spec = await Spec.findById(req.params.id)
    res.render('show.ejs', {spec})
})

// create
router.post('/', (req, res) => {
    // dave taught me this. thanks dave.
    req.body.ingredients = (typeof(req.body.ingredients)===Array?req.body.ingredients.join(', '):req.body.ingredients).split(', ')
    req.body.tags = (typeof(req.body.tags)===Array?req.body.tags.join(', '):req.body.tags).split(', ')
    Spec.create(req.body, (err, spec) => {
        if (err) {
            console.log(`error ${err}`)
            res.send(error)
        } else {
            res.redirect('/specs')
        }
    })
})

// destroy
router.delete('/:id', (req, res) => {
    Spec.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect('/specs')
    })
})

// edit
router.get('/:id/edit', (req, res) => {
    Spec.findById(req.params.id, (err, spec) => {
        res.render('edit.ejs', {spec})
    })
})

// update
router.put('/:id', (req, res) => {
    req.body.ingredients = (typeof(req.body.ingredients)===Array?req.body.ingredients.join(', '):req.body.ingredients).split(', ')
    req.body.tags = (typeof(req.body.tags)===Array?req.body.tags.join(', '):req.body.tags).split(', ')
    Spec.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedModel) => {
        res.redirect(`/specs/${req.params.id}`)
    })
})

module.exports = router