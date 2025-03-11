import { Link } from "react-router-dom"


function NotFound(){
    return <>
    <h1 className="text-3xl mt-6 text-blue-950 font-bold text-center">404 page not found</h1>
    <p className=" mt-6 text-blue-950 font-bold text-center">Something went wrong</p>
    <div className="flex justify-center">
    <Link to="/"><button className="mt-6 border-2 p-2 rounded-3xl bg-black text-white cursor-pointer font-bold text-center">Go To Home</button></Link></div>
    </>
}

export default NotFound