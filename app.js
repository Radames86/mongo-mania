const express = require('express')
const logger = require('morgan')
const recipeRouter = require('./routes/recipe/recipeRouter.js')


const app = express()

app.use(logger('dev'))
app.use(express.json())

app.use('/api/recipes', recipeRouter)


module.exports = app