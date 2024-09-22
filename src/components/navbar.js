import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState, forwardRef } from "react";

import "./navbar.scss";
import variables from "../UTILS/color.scss";

const Navbar = forwardRef((props, ref) => {
  const [offset, setOffset] = useState(0);
  var tmp = Math.max(5, Math.min(14, Math.floor(offset) / 30) / 15) * 255;

  var menubtnref = useRef();
  var linkwrapperref = useRef();

  const navigate = useNavigate();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      // console.log(offset)
      setOffset(window.scrollY);
    });
  }, [offset]);

  const menuBtnClick = (e) => {
    var openFlag = menubtnref.current.className.indexOf("open") === -1 ? 0 : 1;

    if (!openFlag) {
      menubtnref.current.classList.add("open");
      linkwrapperref.current.classList.add("open");
      console.log("open");
    } else {
      menubtnref.current.classList.remove("open");
      linkwrapperref.current.classList.remove("open");
      console.log("close");
    }
  };

  // style={{backgroundColor: (tmp==0)?variables.primary:variables.black+tmp.toString(16)}}
  return (
    <nav className="navbar" ref={ref}>
      <div className="logo-wrapper">
        <div className="nav-logo">ISTA</div>

        <div className="menu-btn-wrapper">
          <div
            className="menu-btn"
            ref={menubtnref}
            onClick={menuBtnClick}
          ></div>
        </div>
      </div>

      <div className="nav-container">
        <div className="link-wrapper" ref={linkwrapperref}>
          <Link to="/">Home</Link>
          <Link to="https://cache.istaceg.in/">Cache</Link>
          <Link to="/exp">Placement Experiences</Link>
          <Link to="/ipp23">i++</Link>
          <Link to="/#Itrix">ITrix</Link>
          <Link to="/techtrek2">Tech Trek</Link>
          {/* <Link to="/#Ipp">I++</Link> */}
          <Link to="/#about">About</Link>
        </div>
      </div>
    </nav>
  );
});

export default Navbar;
