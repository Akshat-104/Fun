import { Routes, Route } from "react-router-dom";
import NamePage from "./Pages/NamePage";
// import GreetingPage from "./Pages/ChristmasAudioPlayer";
import MusicPage from "./Pages/MusicPage";
// import ChristmasPage from "./ChristmasPage"; // a simple page with Christmas song
// import ProtectedRoute from "./Pages/ProtectedRoute";
import ChristmasAudioPlayer from "./Pages/ChristmasAudioPlayer";
// import ChristmasSong from "./Pages/christmasSong";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NamePage />} />
      <Route path="/greeting" element={<ChristmasAudioPlayer />} />
      <Route
        path="/music"
        element={
            <MusicPage />
        }
      />
    </Routes>
  );
}

export default App;