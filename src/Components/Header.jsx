import { IoReorderThreeOutline } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { useSidebar } from "../utilis/useContext.jsx";
import { useEffect, useState } from "react";
import { FaRegUser } from "react-icons/fa";

const Header = () => {
  const { sideBar, setSideBarFun } = useSidebar();
  const [userModal, setUserModal] = useState(false);
  const [user, setUser] = useState(<FaRegUser />);

  useEffect(() => {
    const userName = localStorage.getItem("name");
    if (userName) {
      setUser(userName.split("")[0].toUpperCase()); // Assuming the name stored is the URL of the profile image
    }
  }, []);

  return (
    <div className="m-0 p-0 box-border">
      <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="flex items-center justify-between p-1 sm:p-2 md:p-3 lg:p-4">
          <div className="flex items-center gap-2">
            <div
              onClick={() => setSideBarFun(!sideBar)}
              className="cursor-pointer p-2 "
            >
              <IoReorderThreeOutline className="text-4xl hover:bg-gray-100 p-1 rounded-2xl" />
            </div>
            <Link to={"/"}>
              <div className="cursor-pointer flex flex-row items-center text-xl font-semibold">
                <FaYoutube className="text-red-600 text-3xl" />
                <h6 className="hidden sm:inline">YouTube</h6>
              </div>
            </Link>
          </div>

          <div className="hidden sm:block">
            <SearchBar />
          </div>

          <div className="flex items-center gap-5 relative">
            <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-3xl cursor-pointer hover:bg-gray-200 transition-all">
              <FiPlus className="text-3xl text-gray-700" />
              <span className="font-semibold text-lg text-gray-800 hidden sm:inline">
                Create
              </span>
            </div>
            <FaRegBell className="text-4xl text-gray-700 p-2 rounded-full cursor-pointer hover:bg-gray-100 transition-all" />

            <div
              onClick={() => setUserModal((prev) => !prev)}
              className={`text-xl mr-5 border-2 ${
                localStorage.getItem("name") ? "py-1 px-3" : "p-2"
              } cursor-pointer rounded-3xl bg-gray-800 font-semibold text-white`}
            >
              {user}
            </div>

           {/* modal for login and view channel */}
            {userModal && (
              <div className="absolute top-12 right-0 bg-white rounded-md shadow-lg w-40 border border-gray-300">
                <Link to={"/channel/:id"}>
                  <div className="hover:bg-neutral-900 hover:text-white cursor-pointer px-4 py-2 transition-all">
                    Channel
                  </div>
                </Link>
                <Link to="/login">
                  <div className="hover:bg-neutral-900 hover:text-white cursor-pointer px-4 py-2 transition-all">
                    Login
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
