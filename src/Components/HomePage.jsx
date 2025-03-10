import Videos from "./Videos";

const HomePage = () => {

  const options = [
    "All",
    "Comedy",
    "Twenty20 Cricket",
    "Music",
    "Live",
    "Mixes",
    "Gaming",
    "Debates",
    "Coke Studio Pakistan",
    "Democracy",
    "Pakistani dramas",
  ];

  return (
    <div className="container mx-auto p-4">
      {/* Filters section */}
      <div className="flex flex-wrap gap-3 mb-8">
        {options.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-gray-200 text-gray-800 px-4 py-2 rounded-xl cursor-pointer hover:bg-gray-400  transition-all"
            >
              {item}
            </div>
          );
        })}
      </div>
      <Videos/>
    </div>
  );
};

export default HomePage;
