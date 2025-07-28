const mongoose = require('mongoose')
const app = require('./app')

mongoose
    .connect('mongodb://localhost:27017/recipe-database')
    .then(()=>{
        console.log('database connected successfully')

         app.listen(3000, ()=>{
            console.log('Server running on port 3000')
        })
    }) 
      .catch((error)=>{
        console.log('Connection unsuccessful', error)
      })
    
