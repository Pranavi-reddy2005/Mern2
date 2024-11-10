const validateToken = (req, res, next) => {
    const secretkey = '1234'
    const token = req.headers.authorization
    console.log(token)
    if (!token) {
        return res.status(401).json({ message: "Invalid token" })
    }
    try {
        next()
    } catch (error) {

    }
}


module.exports = validateToken;