import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
// import Quote from "./pages/Quote";
// import ThankYou from "./pages/ThankYou";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />

          {/* <Route path="/quote" element={<Quote />} /> */}
          {/* <Route path="/thank-you" element={<ThankYou />} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
