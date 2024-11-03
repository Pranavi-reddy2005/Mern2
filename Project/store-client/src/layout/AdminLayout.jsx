import { Outlet } from "react-router-dom"
import AdminLeftBar from "../components/Admin/AdminLeftBar"
const AdminLayout = () => {
    return(
        <>
        <div className="w-screen h-full flex flex-row justify-center items-center">
            <div className="w-[25vw] h-screen fixed  left-0 top-0">
                <AdminLeftBar/>
            </div>
            <div className=" relative w-[75vw] h-full flex flex-col justify-start items-start">
            <AdminTopBar/>
            <Outlet />
            </div>
        </div>
         
        </>
    )
}

export default AdminLayout