import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageWrap from "@/components/PageWrap";
import Home from "@/pages/Home";
import About from "@/pages/About";
import { ProductsIndex, ProductDetail } from "@/pages/Products";
import { TestingIndex, TestingDetail } from "@/pages/Testing";
import Contact from "@/pages/Contact";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrap><Home /></PageWrap>} />
        <Route path="/about" element={<PageWrap><About /></PageWrap>} />
        <Route path="/products" element={<PageWrap><ProductsIndex /></PageWrap>} />
        <Route path="/products/:slug" element={<PageWrap><ProductDetail /></PageWrap>} />
        <Route path="/testing" element={<PageWrap><TestingIndex /></PageWrap>} />
        <Route path="/testing/:slug" element={<PageWrap><TestingDetail /></PageWrap>} />
        <Route path="/contact" element={<PageWrap><Contact /></PageWrap>} />
        <Route path="*" element={<PageWrap><Home /></PageWrap>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <div className="App bg-paper text-ink">
      <BrowserRouter>
        <Navbar />
        <AnimatedRoutes />
        <Footer />
        <Toaster
          position="bottom-right"
          theme="light"
          toastOptions={{
            style: {
              background: "#0A0A0A",
              color: "#FAFAF9",
              border: "1px solid #E8302B",
              borderRadius: "0px",
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "12px",
              letterSpacing: "0.05em",
            },
          }}
        />
      </BrowserRouter>
    </div>
  );
}
