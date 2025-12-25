import { useRef, useState, useEffect } from "react";

function MusicCard({ title, artist, cover, src }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => setIsPlaying(true));
    }
  };

  const onSeek = (e) => {
    const audio = audioRef.current;
    const value = Number(e.target.value);
    const t = (value / 100) * duration;
    audio.currentTime = t;
    setCurrentTime(t);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onLoaded = () => setDuration(audio.duration || 0);
    const onTime = () => setCurrentTime(audio.currentTime || 0);
    const onEnded = () => setIsPlaying(false);

    audio.addEventListener("loadedmetadata", onLoaded);
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.removeEventListener("loadedmetadata", onLoaded);
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("ended", onEnded);
    };
  }, []);

  const percent = duration ? (currentTime / duration) * 100 : 0;

  const fmt = (s) => {
    const m = Math.floor(s / 60);
    const r = Math.floor(s % 60);
    return `${m}:${r < 10 ? "0" + r : r}`;
  };

  return (
    <div className="max-w-sm w-full bg-gray-900 text-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition duration-300">
      {/* Album Art */}
      <img src={cover} alt="Album Cover" className="w-full h-56 object-cover" />

      {/* Track Info */}
      <div className="p-5">
        <h2 className="text-xl font-bold tracking-wide">{title}</h2>
        <p className="text-sm text-gray-400">{artist}</p>

        {/* Controls */}
        <div className="flex items-center mt-5">
          <button
            onClick={togglePlay}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 hover:bg-green-600 shadow-lg transition transform hover:scale-110"
          >
            {isPlaying ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <rect x="6" y="4" width="4" height="16" />
                <rect x="14" y="4" width="4" height="16" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M5 3v18l15-9-15-9z" />
              </svg>
            )}
          </button>

          <div className="flex-1 ml-5">
            <input
              type="range"
              min={0}
              max={100}
              value={percent}
              onChange={onSeek}
              className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-green-500"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-2">
              <span>{fmt(currentTime)}</span>
              <span>{fmt(duration)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hidden audio element */}
      <audio ref={audioRef} src={src} preload="metadata" />
    </div>
  );
}
export default MusicCard

// export default function MusicPage() {
//   return (
//     <div className="min-h-screen flex items-center justify-center gap-10 bg-gradient-to-br from-black via-gray-900 to-green-900 p-10">
//       <div className="text-white"></div>
//       <MusicCard
//         title="505"
//         artist="Arctic Monkeys"
//         cover="https://i.scdn.co/image/ab67616d00001e020c8ac83035e9588e8ad34b90"
//         src="/505.mp3"
//       />
//       <MusicCard
//         title="High On You"
//         artist="Jind Universe"
//         cover="https://i.scdn.co/image/ab67616d00001e02d968dc9090c04aef184ab00f"
//         src="/HighOnYou.mp3"
//       />
//     </div>
//   );
// }