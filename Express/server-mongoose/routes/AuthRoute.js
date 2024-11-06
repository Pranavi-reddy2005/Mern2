const express = require('express')
const router = express.Router();
const Users = require('../models/UsersModel')
const bcrypt = require('bcrypt')
router.post('/register', async (req, res) => {
    try {
        // const newuser = new Users(req.body)
        const { name, email, phone, password } = req.body
        if (!name || !email || !phone || !password) {
           return res.status(401).json({ message: "All fields required" })
        }

        //TODO : Add User Email & Phone Validation
        // Email
        const existingemail = await Users.findOne({email})
        if (existingemail) {
          return  res.status(500).json({ message: `User with ${email} already exists !` })
        }
        // Phone
        const existingphone = await Users.findOne({phone})
        if (existingphone) {
           return res.status(500).json({ message: `User with ${phone} already exists !` })
        }
        const salt = await bcrypt.genSalt(10)
        const hashedpassword = await bcrypt.hash(password,salt)
        const newuser = new Users({
            name,
            email,
            phone,
            password : hashedpassword
        })
        await newuser.save()
        return res.status(200).json(newuser)
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
})


module.exports = router