const express = require('express')
const recipeRouter = express.Router()

const {
    getAllRecipes,
    createRecipe
} = require('./controller/recipeController')


recipeRouter.get('/recipes', getAllRecipes)
recipeRouter.post('/recipes', createRecipe )



module.exports = recipeRouter