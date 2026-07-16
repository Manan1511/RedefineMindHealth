import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { SiteContentProvider } from "./content/SiteContentProvider";
import CursorHue from "./components/CursorHue";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import AdminPage from "./pages/admin/AdminPage";
import Research from "./pages/Research";
import Forms from "./pages/Forms";
import Gallery from "./pages/Gallery";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <SiteContentProvider>
      <BrowserRouter>
        <CursorHue />
<ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="faq" element={<Faq />} />
            <Route path="contact" element={<Contact />} />
            <Route path="research" element={<Research />} />
            <Route path="forms" element={<Forms />} />
            <Route path="gallery" element={<Gallery />} />
          </Route>
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </BrowserRouter>
    </SiteContentProvider>
  );
}
