const express =require('express')
const fs = require('fs')
const port = process.env.PORT || 4000

const app =express()
app.use('/', express.static(__dirname + '/'));

app.get('/',(req,res)=>{
   
    res.render('index') 
})

app.listen(port,()=>{
    console.log('it is working on port 4000')
})
