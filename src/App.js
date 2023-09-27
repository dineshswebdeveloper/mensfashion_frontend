import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Footer from "./components/Footer";
// import PreLoader from "./components/PreLoader";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="d-flex flex-column bg-light">
      <BrowserRouter basename="">
        <Navbar />
        <Routes>
          <Route path="*" element={<Dashboard />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
