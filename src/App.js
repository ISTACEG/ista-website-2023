import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home-page";
// import ItrixPage from './pages/Itrix-page';
import Footer from "./components/footer";
import Ipp23Page from "./pages/ipp23-page";
import Techtrek2 from "./pages/tech-trek2";
import Experiences from "./components/Experiences/Experiences";

function App() {
  return (
    <>
      <div className="App">
      <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no"></meta>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ipp23" element={<Ipp23Page />} />
          <Route path="/techtrek2" element={<Techtrek2/>}/>
          <Route path="/experiences" element={<Experiences/>}/>
          {/* <Route path='/itrix' element={<ItrixPage />}/> */}
          {/* <Route path='/ipp' element={<Ipp />}/> */}
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
