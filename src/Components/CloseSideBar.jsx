import { FaHome, FaRegUserCircle} from 'react-icons/fa';
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { useSidebar } from '../utilis/useContext.jsx';
import { Link } from 'react-router-dom';



function CloseSideBar(){
    const { sideBar } = useSidebar();

    return <div
    className={`${
      !sideBar ? 'block' : 'hidden'
    } m-3 `}
  >
    <ul className='w-20 flex flex-col gap-2'>
        <Link to ="/"><li className="flex flex-col items-center space-x-2 p-2 hover:bg-gray-100 rounded-md"><FaHome className='text-2xl'/><p className='text-xs'>Home</p></li></Link>
        <li className="flex flex-col items-center space-x-2 p-2 hover:bg-gray-100 rounded-md"><SiYoutubeshorts className='text-2xl'/><p className='text-xs'>Shorts</p></li>
        <li className="flex flex-col items-center space-x-2 p-2 hover:bg-gray-100 rounded-md"><MdOutlineSubscriptions className='text-2xl'/><p className='text-xs'>Subscriptions</p></li>
        <li className="flex flex-col items-center space-x-2 p-2 hover:bg-gray-100 rounded-md"><FaRegUserCircle className='text-2xl'/><p className='text-xs'>You</p></li>
    </ul>

    </div>
}

export default CloseSideBar