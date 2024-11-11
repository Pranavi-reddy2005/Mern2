import { NavLink } from "react-router-dom"
import { User } from 'lucide-react'
import { useState } from "react"
const Navbar = () => {

    const [showLogin, setShowLogin] = useState(false)
    const Linksdata = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'Products',
            path: '/products'
        },
        {
            title: 'Contact',
            path: '/contact'
        },
        // {
        //     title: 'Orders',
        //     path: '/orders'
        // },
        // {
        //     title: 'Users',
        //     path: '/users'
        // },
        // {
        //     title: 'Settings',
        //     path: '/settings'
        // },
        
    ]
    return (
        <>
            <div className='w-screen h-14 shadow-purple-500 shadow-md flex flex-row justify-center items-center'>
                <div className='w-[40%] flex justify-start items-center font-bold text-2xl text-purple-500'>
                    Max Store
                </div>
                <div className='w-[40%] h-full flex justify-end items-center '>
                    <div className='w-full h-full flex flex-row justify-end items-center gap-8 font-bold'>
                        {Linksdata.map((link, index) => (
                            <NavLink to={link.path} key={index} className='h-[65%] w-20 hover:bg-purple-500/90 hover:text-white flex justify-center items-center rounded-sm'>
                                {link.title}
                            </NavLink>
                        ))
                        }
                    </div>
                    <button className="h-9 w-9 flex justify-center items-center border-black rounded-full hover:border-purple-500 hover:text-purple-500 ml-4 shadow-md"onClick={() => {setShowLogin(!showLogin)}}>
                        <User className='h-6 w-6' />
                    </button>
                </div>
            </div>
            {showLogin && (
                <div className="absolute top-0 left-0 z-50 h-screen w-screen flex justify-center items-center bg-black/40">
                hello
                </div>

            )

            }
        </>
    )
}

export default Navbar