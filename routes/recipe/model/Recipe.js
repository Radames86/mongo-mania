const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
    recipeName: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('Recipe', recipeSchema)