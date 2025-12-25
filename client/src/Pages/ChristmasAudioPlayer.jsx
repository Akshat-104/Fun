import { useNavigate } from "react-router-dom";

export default function ChristmasAudioPlayer() {
  const navigate = useNavigate();
  const rawName = localStorage.getItem("userName") || "Guest";
  const userName = rawName.trim().toLowerCase(); // normalize

  const handleClick = () => {
    navigate("/music");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-green-900 p-10">
      <h1 className="text-4xl font-bold text-white mb-6">
        Merry Christmas, {rawName}! 🎄
      </h1>
      <p className="text-lg text-gray-300 mb-8">
        jassu da janam hoya bhaga wali raat
      </p>
      <img src="https://i.pinimg.com/originals/bc/f3/49/bcf349f144ad673a13d81f4fc522d6ff.gif" className="w-60 mb-8"></img>

      {/* Only show button if name is Sanjana */}
      {userName === "sanjana" && (
        <button
          onClick={handleClick}
          className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full shadow-lg transition transform hover:scale-105"
        >
          CLICK ME!!!!
        </button>
      )}
    </div>
  );
}