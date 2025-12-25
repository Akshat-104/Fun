import MusicCard from "./MusicCard";

export default function MusicPage() {
  const rawName = localStorage.getItem("userName") || "Guest";
  const userName = rawName.trim().toLowerCase();

  const isSanjana = userName === "sanjana";

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-6 py-12">
      {/* Top message */}
      <h1 className="text-center text-3xl md:text-4xl font-extrabold text-white mb-12 leading-relaxed max-w-3xl">
        {isSanjana
          ? "Oyeee kussukussu idhar aagyi hihi apke fav songs kussukussu soi sa bhi shalalo khikhikhi I love You kussukussu muahhh You are the best hmmm hmmm hmmmm 🩷💙"
          : "Enjoy this festive Christmas song! 🎄"}
      </h1>

      {/* Cards row */}
      <div className="flex flex-wrap gap-10 justify-center">
        {isSanjana ? (
          <>
            <MusicCard
              title="505"
              artist="Arctic Monkeys"
              cover="https://i.scdn.co/image/ab67616d00001e020c8ac83035e9588e8ad34b90"
              src="/505.mp3"
            />
            <MusicCard
              title="High On You"
              artist="Jind Universe"
              cover="https://i.scdn.co/image/ab67616d00001e02d968dc9090c04aef184ab00f"
              src="/HighOnYou.mp3"
            />
          </>
        ) : (
          <MusicCard
            title="Christmas Song"
            artist="Holiday Classics"
            cover="/christmas-cover.jpg"
            src="/christmas.mp3"
          />
        )}
      </div>
    </div>
  );
}