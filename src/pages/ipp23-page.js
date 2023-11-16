import Footer from "../components/footer";
import Navbar from "../components/navbar";
import "./ipp23-page.scss";
import Cards from "../components/cards/cards";
import Ipp23Description from "../components/ippupdate23/ipp23_description";

const Ipp23Page = () => {
  return (
    <div className="ipp">
      <Navbar></Navbar>
      <Ipp23Description></Ipp23Description>
      <Cards></Cards>
    </div>
  );
};

export default Ipp23Page;
