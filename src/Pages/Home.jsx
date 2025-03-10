import HomePage from "../Components/HomePage";
import SideBar from "../Components/SideBar";
import CloseSideBar from "../Components/CloseSideBar"

function Home() {
  return (
    <div className="flex flex-row  pt-15 ">
        <CloseSideBar />
        <SideBar />
        <HomePage />
    </div>
  );
}

export default Home;