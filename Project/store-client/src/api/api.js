
import axios from 'axios'


// const API = 'https://671b70ef2c842d92c37fec0c.mockapi.io/prodcutsapp/products'
const API = 'http://localhost:3000'
// const PRODUCT_API = 'http://localhost:3000/products/all'
// const ORDER_API = 'http://localhost:3000/orders/all'
// const USER_API = 'http://localhost:3000/users/all'

const getProducts = () => axios.get(`${API}/products/all`)
const getOrders = () => axios.get(`${API}/orders/all`)
const getUsers = () => axios.get(`${API}/users/all`)
// const getProducts = () => axios.get(PRODUCT_API)
// const getOrders = () => axios.get(ORDER_API)
// const getUsers = () => axios.get(USER_API)
const Login = (data) => axios.post(`${API}/auth/login`, data)

export { getProducts, getOrders, getUsers, Login }