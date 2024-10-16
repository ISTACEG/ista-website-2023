import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState, forwardRef } from "react";
import "./navbar.scss";

const Navbar = forwardRef((props, ref) => {
  const [offset, setOffset] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const menubtnref = useRef();
  const linkwrapperref = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuBtnClick = () => {
    setIsOpen(!isOpen);
    menubtnref.current.classList.toggle("open");
    linkwrapperref.current.classList.toggle("open");
  };

  return (
    <nav className={`navbar ${offset > 50 ? "scrolled" : ""}`} ref={ref}>
      <div className="logo-wrapper">
        <div className="nav-logo">ISTA</div>
        <div
          className="menu-btn-wrapper"
          ref={menubtnref}
          onClick={menuBtnClick}
        >
          <div className="menu-btn"></div>
        </div>
      </div>

      <div className={`nav-container ${isOpen ? "open" : ""}`} id="cc1">
        <div className="link-wrapper" ref={linkwrapperref}>
          <Link to="/">Home</Link>
          <Link to="https://cache.istaceg.in/">Cache</Link>
          <Link to="/experiences">Placement Experiences</Link>
          <Link to="/ipp23">i++</Link>
          <Link to="/#Itrix">ITrix</Link>
          <Link to="/techtrek2">Tech Trek</Link>
          <Link to="/#about">About</Link>
        </div>
      </div>
    </nav>
  );
});

export default Navbar;
