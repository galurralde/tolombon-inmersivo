import { Route, Routes } from "react-router-dom";

import Bibliografia from "./pages/Bibliografia";
import Footer from "./components/Footer";
import Gastronomia from "./pages/Gastronomia";
import Header from "./components/Header";
import Imagenes from "./pages/Imagenes";
import Inicio from "./pages/Inicio";
import Navbar from "./components/Navbar";
import Nosotros from "./pages/Nosotros";
import WebAR from "./pages/WebAR";

function App() {
  return (
<>
  <Header />

  <Navbar />

  <Routes>
    <Route path="/" element={<Inicio />} />
    <Route path="/webar" element={<WebAR />} />
    <Route path="/gastronomia" element={<Gastronomia />} />
    <Route path="/nosotros" element={<Nosotros />} />
    <Route path="/bibliografia" element={<Bibliografia />} />
    <Route path="/imagenes" element={<Imagenes />} />
  </Routes>

  <Footer />
</>
  );
}

export default App;