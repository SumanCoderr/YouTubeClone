import { FaHome } from 'react-icons/fa';
import { SiYoutubeshorts } from 'react-icons/si';
import { MdOutlineSubscriptions } from 'react-icons/md';
import { FaChevronRight } from 'react-icons/fa';
import { MdOutlinePlaylistPlay } from 'react-icons/md';
import { MdOutlineSmartDisplay } from 'react-icons/md';
import { MdOutlineWatchLater } from 'react-icons/md';
import { AiOutlineLike } from 'react-icons/ai';
import { useSidebar } from '../utilis/useContext.jsx';
import { Link } from 'react-router-dom';

const SideBar = () => {
  const { sideBar } = useSidebar();


  return (
    <div
      className={`${
        sideBar ? 'block' : 'hidden'
      } transition-all duration-1000  w-70 h-full z-10 bg-white shadow-lg border-r border-gray-300`}
    >
      {/* Top Section */}
      <div className="flex flex-col gap-3 px-6 py-6 border-b border-gray-300">
        <Link to ="/"><div className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
          <FaHome className="text-xl" />
          <span className="text-lg font-medium">Home</span>
        </div></Link>

        <div className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
          <SiYoutubeshorts className="text-xl" />
          <span className="text-lg font-medium">Shorts</span>
        </div>

        <div className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
          <MdOutlineSubscriptions className="text-xl" />
          <span className="text-lg font-medium">Subscriptions</span>
        </div>
      </div>

      {/* Middle Section */}
      <div className="flex flex-col gap-3 px-6 py-4 border-b border-gray-300">
        <div className="flex items-center justify-between">
          <span className="text-lg font-medium">You</span>
          <FaChevronRight className="text-xl" />
        </div>

        <div className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
          <MdOutlinePlaylistPlay className="text-xl" />
          <span className="text-lg font-medium">Playlist</span>
        </div>

        <div className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
          <MdOutlineSmartDisplay className="text-xl" />
          <span className="text-lg font-medium">Your videos</span>
        </div>

        <div className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
          <MdOutlineWatchLater className="text-xl" />
          <span className="text-lg font-medium">Watch later</span>
        </div>

        <div className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
          <AiOutlineLike className="text-xl" />
          <span className="text-lg font-medium">Liked videos</span>
        </div>
      </div>

      {/* Subscription Section */}
      <div className="flex flex-col gap-3 px-6 py-4">
        <div className="text-lg font-semibold">Subscriptions</div>

        <div className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
          <img
            className="w-8 h-8 rounded-full"
            src="https://yt3.googleusercontent.com/8mSwwcBIsjRD9kWwIk5HT2yvd_UxL4nq035UXMm-zznERh9cCDh09-SbxeIKTfFnoeSAqwra=s900-c-k-c0x00ffffff-no-rj"
            alt="Tanay Pratap"
          />
          <span className="text-medium font-medium">Tanay Pratap</span>
        </div>

        <div className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
          <img
            className="w-8 h-8 rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFBLC6fb-Wvc_3mWJxHGbMfV4TQeczMhcHHQ&s"
            alt="CodeWithHarry"
          />
          <span className="text-medium font-medium">CodeWithHarry</span>
        </div>

        <div className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
          <img
            className="w-8 h-8 rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3DkdQTQNzysiW5w6jX9nttJYoAmU8VIOR9w&s"
            alt="Cyber Zeel"
          />
          <span className="text-medium font-medium">Cyber Zeel</span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;


