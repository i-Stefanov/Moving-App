import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
// import Quote from "./pages/Quote";
// import ThankYou from "./pages/ThankYou";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/quote" element={<Quote />} /> */}
        {/* <Route path="/thank-you" element={<ThankYou />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
