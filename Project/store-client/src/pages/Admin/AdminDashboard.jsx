import React, { useEffect, useState } from 'react'
import AdminDashboardHomeCards from '../../components/Admin/AdminDashboardHomeCards'


import { toast } from 'sonner'

const AdminDashboard = () => {
  const [users,setUsers] = useState(0)
  const [products,setProducts] = useState(0)
  const [orders,setOrders] = useState(0)

  const fetchData = async () => {
    try{
      const userresponse = await getUsersCount()
      if(userresponse.status === 200) {
        setUsers(userresponse.data.count)
      }
      const productresponse = await getProductsCount()
      if(productresponse.status === 200) {
        setProducts(productresponse.data.count)
      }
      const orderresponse = await getOrdersCount()
      if(orderresponse.status === 200) {
        setOrders(orderresponse.data.count)
      }
    }catch{
      toast.error(error)
    }
  }

  useEffect(() =>{
    fetchData()
  }, [])
 



  return (
    <div className='w-full min-h-[80vh] flex justify-center items-center'>
      <AdminDashboardHomeCards products={products} users={users} orders={orders}/>
      </div>
  )
}

export default AdminDashboard