import { IoReorderThreeOutline } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { useSidebar } from "../utilis/useContext.jsx";
import { useState } from "react";

const Header = () => {
  const { sideBar, setSideBarFun } = useSidebar();
  const [userModal, setUserModal] = useState(false);
  const [user, setUser] = useState(
    "https://t3.ftcdn.net/jpg/03/53/11/00/360_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg"
  );

  return (
    <div className="m-0 p-0 box-border">
      <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="flex items-center justify-between p-1">
          <div className="flex items-center gap-2">
            <div
              onClick={() => setSideBarFun(!sideBar)}
              className="cursor-pointer p-2"
            >
              <IoReorderThreeOutline className="text-4xl hover:bg-gray-100 p-1 rounded-2xl" />
            </div>
            <div className="cursor-pointer flex flex-row items-center text-xl font-semibold">
              <FaYoutube className="text-red-600 text-3xl" />
              <h6>YouTube</h6>
            </div>
          </div>

          <div>
            <SearchBar />
          </div>

          <div className="flex items-center gap-5 relative">
            <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-3xl cursor-pointer hover:bg-gray-200 transition-all">
              <FiPlus className="text-3xl text-gray-700" />
              <span className="font-semibold text-lg text-gray-800">
                Create
              </span>
            </div>
            <FaRegBell className="text-4xl text-gray-700 p-2 rounded-full cursor-pointer hover:bg-gray-100 transition-all" />
            <Link to={"/login"}>
              <img
                onClick={() => setUserModal((prev) => !prev)}
                src={user}
                className="cursor-pointer h-10 w-10 rounded-full border-2 border-gray-300 hover:border-gray-400 transition-all"
                alt="user"
              />
            </Link>
            {userModal && (
              <div className="absolute top-12 right-0 bg-white rounded-md shadow-lg w-40 border border-gray-300">
                <div className="hover:bg-neutral-900 hover:text-white cursor-pointer px-4 py-2 transition-all">
                  Profile
                </div>
                <div className="hover:bg-neutral-900 hover:text-white cursor-pointer px-4 py-2 transition-all">
                  Logout
                </div>
                <div className="hover:bg-neutral-900 hover:text-white cursor-pointer px-4 py-2 transition-all">
                  Login
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
