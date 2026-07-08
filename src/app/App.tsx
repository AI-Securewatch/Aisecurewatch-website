import { BrowserRouter, Routes, Route } from "react-router";
import { DemoModalProvider } from "./context/DemoModalContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Leadership from "./pages/Leadership";
import SeanChihwendu from "./pages/founders/SeanChihwendu";
import NathanObiekwe from "./pages/founders/NathanObiekwe";
import Careers from "./pages/Careers";
import Resources from "./pages/Resources";
import TheMissingIamLayer from "./pages/resources/TheMissingIamLayer";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <DemoModalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/leadership" element={<Layout><Leadership /></Layout>} />
          <Route path="/leadership/sean-chihwendu" element={<Layout><SeanChihwendu /></Layout>} />
          <Route path="/leadership/nathan-obiekwe" element={<Layout><NathanObiekwe /></Layout>} />
          <Route path="/careers" element={<Layout><Careers /></Layout>} />
          <Route path="/resources" element={<Layout><Resources /></Layout>} />
          <Route path="/resources/the-missing-iam-layer-for-ai-authority" element={<Layout><TheMissingIamLayer /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />
          <Route path="*" element={<Layout><NotFound /></Layout>} />
        </Routes>
      </BrowserRouter>
    </DemoModalProvider>
  );
}
