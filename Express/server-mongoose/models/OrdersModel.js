const mongoose = require('mongoose')

const OrdersSchema = new mongoose.Schema({
    userID: {
        type: String,
        required: true,
        unique: true
    },
    productID: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
        unique: true
    },
    shippingaddress: {
            type: String,
            required: true
     },
            
})


const Orders = mongoose.model("Orders", OrdersSchema)

module.exports = mongoose
