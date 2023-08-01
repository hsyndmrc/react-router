// import Nav from "./components/Nav";
// import Contact from "./pages/Contact";
// import Home from "./pages/Home";
// import NotFound from "./pages/NotFound";
// import People from "./pages/People";
// import Footer from "./components/Footer";
// import { Route, Routes } from "react-router-dom";
// import Paths from "./pages/Paths";
// import PersonDetail from "./pages/PersonDetail";
// import AppRouter from "./router/AppRouter";

import AppRouter from "./router/AppRouter";

function App() {
  return (
    <>
      <AppRouter />
      {/* //! Router yapisini ayri bir component haline getirip router dosyasina tasidik. */}
      {/* <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/paths" element={<Paths />} />
        <Route path="/people" element={<People />} />
        <Route path="/people/:id" element={<PersonDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer /> */}
    </>
  );
}

export default App;
