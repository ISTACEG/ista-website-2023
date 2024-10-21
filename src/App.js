// import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./home-page";
// import ItrixPage from './pages/Itrix-page';
// import Footer from "./components/footer";
// import Ipp23Page from "./pages/ipp23-page";
// import Techtrek2 from "./pages/tech-trek2";
// import Experiences from "./components/Experiences/Experiences";

function App() {
  return (
    <>
      <div className="App">
      <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no"></meta>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
