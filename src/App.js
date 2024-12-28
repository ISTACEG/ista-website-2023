// import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./home-page";
// import ItrixPage from './pages/Itrix-page';
// import Footer from "./components/footer";
// import Ipp23Page from "./pages/ipp23-page";
import Techtrek2 from "./tech-trek2";
import Experiences from "./Experiences/Experiences";
import Signin from "./portal/Signin";
import Register from "./portal/Register";
import Profile from "./portal/Profile";
import Resource from "./Resource"
import History from "./History";
import { Analytics } from '@vercel/analytics/react';
import Navbar from "./Navbar";
import Allgrievance from "./portal/Allgrievance/Allgrievance";
import GrievanceForm from "./portal/GrievanceForm/GrievanceForm";
import AdminGrievance from "./portal/Admin/AdminGrievance";

function App() {
  return (
    <div className="App">
      <Analytics />
      <Navbar />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no"></meta>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resource" element={<Resource />} />
        <Route path="/history" element={<History />} />
        <Route path="/exp_view" element={<Experiences />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/techtrek" element={<Techtrek2 />} />
        <Route path="/portal" element={<Signin/>} />
        <Route path="/portal/register" element={<Register/>} />
        <Route path="/portal/profile" element={<Profile/>} />
        <Route path="/portal/Allgrievance/Allgrievance" element={<Allgrievance/>} />
        <Route path="/portal/GrievanceForm/GrievanceForm" element={<GrievanceForm/>} />
        <Route path="/portal/Admin/AdminGrievance" element={<AdminGrievance/>} />
      </Routes>
    </div>
  );
}

export default App;
