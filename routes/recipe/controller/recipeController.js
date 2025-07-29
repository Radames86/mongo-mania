const Recipe = require('../model/Recipe')




const getAllRecipes = async(req, res)=>{
    try {
        const allRecipes = await Recipe.find({})
        console.log(allRecipes)
        res.json(allRecipes)
    } catch (error) {
        console.log(error)
        res.json({message: 'unsuccessfully fetched recipes', error: error.message})
    }
}

const createRecipe = async(req, res)=>{
    try {
        const{recipeName} = req.body

        const newRecipe = new Recipe({
            recipeName
        })

        await newRecipe.save()
        console.log(newRecipe)
        res.json(newRecipe)
        
    } catch (error) {
        console.log(error)
        res.json({message: 'error creating new recipe', error: error.message})
    }
}


module.exports = {
    getAllRecipes,
    createRecipe
     }

