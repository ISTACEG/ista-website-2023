import "./home-page.scss";
import Navbar from "../components/navbar";
import Welcome from "../components/Welcome";
import Itrix from "../components/itrix";
import Ipp from "../components/ipp";
import Magazine from "../components/magazine";
import Team from "../components/team";
import Logo from "../components/logo";

function Home() {
  return (
    <>
      <div className="Home">
        <Navbar />

        <Welcome />
        <Itrix />
        <Ipp />
        <Logo />
        <Magazine />
        <Team />
      </div>
    </>
  );
}

export default Home;
