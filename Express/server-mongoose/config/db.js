const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://Pranavi:pranavi123@in-aws.lo02y.mongodb.net/max-store?retryWrites=true&w=majority&appName=In-AWS')

const connection = mongoose.connection;

connection.on('connected',() => (console.log("DB Connected")))
connection.on('error',(error) => (console.log("DB Error" + error)))

module.exports = mongoose

