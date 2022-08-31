const mongoose = require('mongoose')
const Schema = mongoose.Schema

// nested schemas: https://stackoverflow.com/questions/39596625/nested-objects-in-mongoose-schemas

// implement later:
// const ingredientSchema = new Schema({
//     name: {type: String, required: true},
//     broadType: String,
//     narrowType: String,
//     amount: String
// }, {timestamps: true})

const specSchema = new Schema({
    name: {type: String, required: true},
    source: String,
    // remove later in favor of ingredient schema
    ingredients: [String],
    // ingredients: [{
    //     type: ingredientSchema,
    //     required: true}],
    garnish: String,
    method: String,
    // remove later in favor of ingredient schema
    tags: [String]
}, {timestamps: true})

const Spec = mongoose.model('Spec', specSchema)
module.exports = Spec