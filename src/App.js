// import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./home-page";
import { Toaster } from 'react-hot-toast';
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
import ForgetPassword from "./portal/Forgetpassword"
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { Riple } from "react-loading-indicators";


const PrivateRoute = ({ element: Component }) => {
  const [isAuthorized, setIsAuthorized] = useState(null); // null initially for loading state
  const token = document.cookie.split("=")[1].split(";")[0] // Get token from cookies
  useEffect(() => {
      const checkAuthorization = async () => {
          try {
                const response = await axios.post("http://localhost:4000/auth/check", {}, {
                  headers: {
                    token: `${token}`
                  }
                });
              setIsAuthorized(response.data.authorized); // Assuming your server responds with { authorized: true/false }
          } catch (error) {
              alert(error.message);
              setIsAuthorized(false);
          }
      };
      checkAuthorization();
  }, [token]);

  if (isAuthorized === null) {
      // Show a loading spinner or placeholder while verifying
      return <div className="loadingContainer">
      <Riple color="#523ad6" size="large" text="" textColor="#ac1414" />
  </div>
  }

  return isAuthorized ? <Component /> : <Navigate to="/portal" />;
};


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
        <Route path="/portal/forgot-password" element={<ForgetPassword />} />
        <Route path="/portal/profile" element={<PrivateRoute element={Profile} />} />
        <Route path="/portal/feed" element={<PrivateRoute element={Allgrievance} />} />
        <Route path="/portal/addGrievance" element={<PrivateRoute element={GrievanceForm} />} />
        <Route path="/portal/allGrievance" element={<PrivateRoute element={AdminGrievance} />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
