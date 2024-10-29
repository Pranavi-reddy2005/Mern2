const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://Pranavi:12345@in-aws.qdphh.mongodb.net/')

const connection = mongoose.connection;

connection.on('connected',() => (console.log("DB Connected")))
connection.on('error',() => (console.log("DB Error")))

module.exports = mongoose

