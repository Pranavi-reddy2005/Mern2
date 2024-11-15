
import axios from 'axios'
import { getToken } from '../pages/service/auth'


// const API = 'https://671b70ef2c842d92c37fec0c.mockapi.io/prodcutsapp/products'
const API = 'http://localhost:3000'
// const PRODUCT_API = 'http://localhost:3000/products/all'
// const ORDER_API = 'http://localhost:3000/orders/all'
// const USER_API = 'http://localhost:3000/users/all'
const axiosInstance = axios.create({
    API
})
axiosInstance.interceptors.request.use(
    (config) => {
        const token = getToken()
        if (token) {
            config.headers.Authorization = token
        }
        return config;
    },
    (error) => {
        return Promise.reject(error)
    }
)

const getProducts = () => axios.get(`${API}/products/all`)
const getProductsCount = () => axios.get(`${API}/products/count`)
const addProduct = (product) => axios.post(`${API}/products/add`, product)
const editProduct = (product, id) => axios.put(`${API}/products/edit/${id}`, product)
const deleteProduct = (id) => axios.delete(`${API}/products/delete/${id}`)
const getOrders = () => axios.get(`${API}/orders/all`)
const getOrdersCount = () => axios.get(`${API}/orders/count`)
const deleteOrder = (id) => axios.delete(`${API}/orders/delete/${id}`)

const getUsers = () => axios.get(`${API}/users/all`)
const getUsersCount = () => axios.get(`${API}/users/count`)
const addUser = (user) => axios.post(`${API}/users/add`, user)
const editUser = (user, id) => axios.put(`${API}/users/edit/${id}`, user)
const deleteUser = (id) => axios.delete(`${API}/users/delete/${id}`)
const resetPassword = (password, id) => axios.put(`${API}/users/resetpassword/${id}`, password)
// const getProducts = () => axios.get(PRODUCT_API)
// const getOrders = () => axios.get(ORDER_API)
// const getUsers = () => axios.get(USER_API)
const Login = (credentials) => axios.post(`${API}/auth/login`, credentials)
const Register = (credentials) => axios.post(`${API}/auth/register`, credentials)

export { getProducts, getOrders, getUsers, Login, Register, 
    addProduct, deleteProduct, editProduct, addUser, editUser,
     deleteUser, getProductsCount,getUsersCount,getOrdersCount,resetPassword,deleteOrder  }