import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Drawings from "./pages/Drawings";
import Videos from "./pages/Videos";
import Photos from "./pages/Photos";

function App() {
  return (
    <div className="min-h-screen bg-cream text-rose-dark selection:bg-rose-light selection:text-cream overflow-x-hidden antialiased">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/drawings" element={<Drawings />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/photos" element={<Photos />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
