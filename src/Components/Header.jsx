// import React from 'react';
// import './Header.css';
// import { IoReorderThreeOutline } from "react-icons/io5";

// const Header = () => {
//   return (
//     <div className="header">
//       <div className="header-left">
//         <div className='h-3 cursor-pointer'>
//             <IoReorderThreeOutline/>
//         </div>
//         <img
//           className="header-logo"
//           src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500 "
//           alt="YouTube Logo"
//         />
//         <input
//           className="header-search"
//           type="text"
//           placeholder="Search"
//         />
//       </div>
//       <div className="header-right">
//         <img
//           className="header-avatar"
//           src="https://www.example.com/path/to/your-avatar.jpg"
//           alt="User Avatar"
//         />
//       </div>
//       <div>

//       </div>
//     </div>
//   );
// };

// export default Header;

import React from "react";
import { useState } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
import SearchBar from "./SearchBar";
import Sidebar from "./SideBar";
import CloseSideBar from "./CloseSideBar";

const Header = () => {
  const [sideBarToggle, setSideBarToggle] = useState(true);

  return (
    <>
      <div className="flex items-center flex-row justify-around p-3 gap-55 ">
        <div className=" flex flex-row items-center gap-2">
          <div className="cursor-pointer p-2">
            <IoReorderThreeOutline
              className=" text-4xl hover:bg-gray-100 p-1 rounded-2xl "
              onClick={() => setSideBarToggle(!sideBarToggle)}
            />
          </div>

          <div className="cursor-pointer flex flex-row items-center text-xl font-semibold">
            <FaYoutube className="text-red-600 text-3xl" />
            <h6>YouTube</h6>
          </div>
        </div>

        <div>
          <SearchBar />
        </div>

        <div className="flex flex-row gap-5 items-center">
          <div className="flex flex-row items-center gap-2 bg-gray-100 px-2 py-1 rounded-3xl cursor-pointer">
            <FiPlus className="text-3xl hover:bg-gray-100 " />
            <span className="font-semibold text-lg">Create</span>
          </div>
          <FaRegBell className=" text-4xl  p-1 rounded-3xl cursor-pointer hover:bg-gray-100" />
          <FaUserCircle className="text-3xl cursor-pointer " />
        </div>
      </div>
      {sideBarToggle ? <Sidebar /> : <CloseSideBar/>}
    </>
  );
};

export default Header;
