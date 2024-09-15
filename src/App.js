import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home-page";
// import ItrixPage from './pages/Itrix-page';
import Footer from "./components/footer";
import Ipp23Page from "./pages/ipp23-page";
import Techtrek2 from "./pages/tech-trek2";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ipp23" element={<Ipp23Page />} />
          <Route path="/techtrek2" element={<Techtrek2/>}/>
          {/* <Route path='/itrix' element={<ItrixPage />}/> */}
          {/* <Route path='/ipp' element={<Ipp />}/> */}
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
