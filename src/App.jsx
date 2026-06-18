import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { supabase } from "./lib/supabase";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Drawings from "./pages/Drawings";
import Videos from "./pages/Videos";
import Photos from "./pages/Photos";

// Helper component to track page views and categories viewed
function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    const getDeviceType = () => {
      const ua = navigator.userAgent;
      if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return "Tablet";
      }
      if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/i.test(ua)) {
        return "Mobile";
      }
      return "Desktop";
    };

    const trackEvent = async () => {
      try {
        const path = location.pathname;
        const device = getDeviceType();
        const eventType = path === "/" ? "page_view" : "category_view";

        await supabase.from("website_analytics").insert([
          {
            event_type: eventType,
            page_path: path,
            device_type: device,
          },
        ]);
      } catch (err) {
        console.error("Failed to insert analytics event:", err);
      }
    };

    trackEvent();
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <div className="min-h-screen bg-cream text-rose-dark selection:bg-rose-light selection:text-cream overflow-x-hidden antialiased">
      <AnalyticsTracker />
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
