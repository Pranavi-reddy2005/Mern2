const express = require('express')
const Port = 3000
const app = express()




app.listen(Port,()=>{
    console.log("Server is running in Port : " + Port)   


    console.log(`Server is running in Port : ${Port}`)
})