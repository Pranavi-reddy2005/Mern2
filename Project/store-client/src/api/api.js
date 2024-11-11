
import axios from 'axios'


// const API = 'https://671b70ef2c842d92c37fec0c.mockapi.io/prodcutsapp/products'
const PRODUCT_API = 'http://localhost:3000/products/all'
const ORDER_API = 'http://localhost:3000/orders/all'
const USER_API = 'http://localhost:3000/users/all'

const getProducts = () => axios.get(PRODUCT_API)
const getOrders = () => axios.get(ORDER_API)
const getUsers = () => axios.get(USER_API)

export { getProducts, getOrders, getUsers }
