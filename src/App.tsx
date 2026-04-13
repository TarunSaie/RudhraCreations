import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Home from "@/pages/Home";

function NotFound() {
  return (
    <div className="min-h-screen bg-cinema-black flex flex-col items-center justify-center text-center px-6">
      <p className="font-cinzel text-gold-500 text-xs tracking-widest uppercase mb-4">404</p>
      <h1 className="font-cinzel text-5xl text-white font-bold mb-4">Scene Not Found</h1>
      <p className="font-inter text-cinema-text-muted mb-8">
        This page doesn't exist in our filmography.
      </p>
      <a
        href="/"
        className="gold-btn px-8 py-3 font-cinzel text-sm tracking-widest"
      >
        Return Home
      </a>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Toaster
        theme="dark"
        toastOptions={{
          style: {
            background: "#1A1A1A",
            border: "1px solid rgba(212,175,55,0.3)",
            color: "#E8E8E8",
          },
        }}
      />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
