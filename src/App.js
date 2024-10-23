// import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./home-page";
// import ItrixPage from './pages/Itrix-page';
// import Footer from "./components/footer";
// import Ipp23Page from "./pages/ipp23-page";
import Techtrek2 from "./tech-trek2";
import Experiences from "./Experiences/Experiences";
import Resource from "./Resource"
import History from "./History";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no"></meta>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resource" element={<Resource />} />
        <Route path="/history" element={<History />} />
        <Route path="/exp_view" element={<Experiences />} />
        <Route path="/techtrek" element={<Techtrek2 />} />
      </Routes>
    </div>
  );
}

export default App;
