const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
    recipeName: {
        type: String,
        required: true
    },
    ingredientPrice:{
        type: Number,
        required: true
    },
    inStock: {
        type: Boolean,
        default: true
    }
        

})

module.exports = mongoose.model('Recipe', recipeSchema)