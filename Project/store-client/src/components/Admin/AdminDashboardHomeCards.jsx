import React from 'react'
import { ListOrdered, ShoppingCart, Users } from 'lucide-react'

const AdminDashboardHomeCards = ({products,users,orders}) => {
    return (
        <>
            {/* <div className="grid grid-cols-2 w-[700px] gap-2 max-[500px]:grid-cols-1 px-3">
  <div className="group w-full rounded-lg bg-[#673ab7] p-5 transition relative duration-300 cursor-pointer hover:translate-y-[3px] hover:shadow-[0_-8px_0px_0px_#2196f3]">
    <p className="text-white text-2xl">2000</p>
    <p className="text-white text-sm">Users</p>
    <svg xmlSpace="preserve" style={{enableBackground: 'new 0 0 512 512'}} viewBox="0 0 512 512" y={0} x={0} height={36} width={36} xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg" className="group-hover:opacity-100 absolute right-[10%] top-[50%] translate-y-[-50%] opacity-20 transition group-hover:scale-110 duration-300">
      <g>
        <path className data-original="#000000" opacity={1} fill="#ffffff" d="M135.169 91.902c16.83 0 30.474-13.649 30.474-30.485 0-11.22-13.533-36.418-22.563-51.981-3.524-6.075-12.297-6.075-15.822 0-9.029 15.563-22.563 40.761-22.563 51.981 0 16.836 13.644 30.485 30.474 30.485zM256 91.902c16.83 0 30.474-13.649 30.474-30.485 0-11.22-13.533-36.418-22.563-51.981-3.524-6.075-12.297-6.075-15.822 0-9.029 15.563-22.563 40.761-22.563 51.981 0 16.836 13.643 30.485 30.474 30.485zM376.83 91.902c16.83 0 30.474-13.649 30.474-30.485 0-11.22-13.533-36.418-22.563-51.981-3.525-6.075-12.297-6.075-15.822 0-9.029 15.563-22.563 40.761-22.563 51.981 0 16.836 13.644 30.485 30.474 30.485zM118.391 116.951c-7.454 0-13.497 6.045-13.497 13.502v108.924h60.55V130.454c0-7.457-6.042-13.502-13.497-13.502h-33.556zM239.221 116.951c-7.454 0-13.497 6.045-13.497 13.502v108.924h60.55V130.454c0-7.457-6.043-13.502-13.497-13.502h-33.556zM360.052 116.951c-7.454 0-13.497 6.045-13.497 13.502v108.924h60.55V130.454c0-7.457-6.043-13.502-13.497-13.502h-33.556zM66.25 356.095a26.11 26.11 0 0 0 7.425-1.08l37.866-11.209c12.377-3.664 25.284-5.496 38.19-5.496s25.813 1.832 38.19 5.496l29.888 8.848c12.377 3.664 25.284 5.496 38.19 5.496s25.813-1.832 38.19-5.496l29.888-8.848c12.377-3.664 25.284-5.496 38.19-5.496s25.813 1.832 38.19 5.496l37.866 11.209a26.146 26.146 0 0 0 7.425 1.08c12.118 0 22.787-8.481 22.787-19.746v-38.672c0-12.82-12.02-23.213-26.848-23.213H70.312c-14.828 0-26.848 10.393-26.848 23.213v38.672c0 11.265 10.67 19.746 22.786 19.746zM497 477.12h-40.946v-91.989a56.002 56.002 0 0 1-10.305.964 56.132 56.132 0 0 1-15.941-2.313l-37.866-11.209c-9.553-2.828-19.537-4.262-29.674-4.262s-20.121 1.434-29.674 4.262l-29.888 8.848c-15.086 4.466-30.799 6.73-46.705 6.73s-31.62-2.264-46.706-6.73l-29.888-8.848c-9.553-2.828-19.537-4.262-29.674-4.262s-20.121 1.434-29.674 4.262l-37.866 11.209a56.138 56.138 0 0 1-15.941 2.314c-3.487 0-6.935-.333-10.305-.964v91.989H15c-8.284 0-15 6.716-15 15s6.716 15 15 15h482c8.284 0 15-6.716 15-15s-6.716-15.001-15-15.001z" />
      </g>
    </svg>
  </div>
  <div className="group w-full rounded-lg bg-[rgb(41,49,79)] p-5 transition relative duration-300 cursor-pointer hover:translate-y-[3px] hover:shadow-[0_-8px_0px_0px_rgb(244,67,54)]">
    <p className="text-white text-2xl">1999</p>
    <p className="text-white text-sm">Products</p>
    <svg className="group-hover:opacity-100 absolute right-[10%] top-[50%] translate-y-[-50%] opacity-20 transition group-hover:scale-110 duration-300" xmlSpace="preserve" style={{enableBackground: 'new 0 0 512 512'}} viewBox="0 0 405.333 405.333" y={0} x={0} height={36} width={36} xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path className data-original="#000000" opacity={1} fill="#ffffff" d="M202.667 0C117.333 0 32 10.667 32 85.333V288c0 41.173 33.493 74.667 74.667 74.667l-32 32v10.667h47.573l42.667-42.667h80.427L288 405.333h42.667v-10.667l-32-32c41.173 0 74.667-33.493 74.667-74.667V85.333C373.333 10.667 296.96 0 202.667 0zm-96 320c-17.707 0-32-14.293-32-32s14.293-32 32-32 32 14.293 32 32-14.294 32-32 32zm74.666-149.333H74.667V85.333h106.667v85.334zM298.667 320c-17.707 0-32-14.293-32-32s14.293-32 32-32 32 14.293 32 32-14.294 32-32 32zm32-149.333H224V85.333h106.667v85.334z" />
      </g>
    </svg>
  </div>
</div> */}
            <div className='w-full flex flex-row justify-center items-center gap-6'>
                <div className='w-1/4 h-[10vh] flex flex-row justify-center items-center px-2 shadow-md rounded-md hover:shadow-purple-300 hover:text-purple-400'>
                    <div className='w-[70%] h-full flex flex-col justify-center items-start px-4'>
                        <p className='text-3xl font-bold'>
                            {users}
                        </p>
                        <p className='text-sm font-semibold px-1'>
                            Users
                        </p>
                    </div>
                    <div className='w-[30%] h-full flex justify-center items-center'>
                        <Users className='w-9 h-9' />
                    </div>
                </div>
                <div className='w-1/4 h-[10vh] flex flex-row justify-center items-center px-2 shadow-md rounded-md hover:shadow-purple-300 hover:text-purple-400'>
                    <div className='w-[70%] h-full flex flex-col justify-center items-start px-4'>
                        <p className='text-3xl font-bold'>
                            {products}
                        </p>
                        <p className='text-sm font-semibold px-1'>
                            Products
                        </p>
                    </div>
                    <div className='w-[30%] h-full flex justify-center items-center'>
                        <ListOrdered className='w-9 h-9' />
                    </div>
                </div>
                <div className='w-1/4 h-[10vh] flex flex-row justify-center items-center px-2 shadow-md rounded-md hover:shadow-purple-300 hover:text-purple-400'>
                    <div className='w-[70%] h-full flex flex-col justify-center items-start px-4'>
                        <p className='text-3xl font-bold'>
                            {orders}
                        </p>
                        <p className='text-sm font-semibold px-1'>
                            Orders
                        </p>
                    </div>
                    <div className='w-[30%] h-full flex justify-center items-center'>
                        <ShoppingCart className='w-9 h-9' /> 
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminDashboardHomeCards