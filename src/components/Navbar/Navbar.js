import { useState, memo, useEffect } from "react";
import { NavLink, Link as RouterLink } from "react-router-dom";
import classname from "classnames";
import { navLinks, blurOnMouseUp } from "../../utils/contents.util";
import "./Navbar.css";

function Navbar({ location, navbarColor }) {
  const [hashKey, setHashKey] = useState();

  const handleNavClick = () => {
    setHashKey(Math.random().toString(32).substr(2, 8));
  };

  const isMatch = ({ match, hash = "" }) => {
    if (!match) return false;
    return `${match.url}${hash}` === `${location.pathname}${location.hash}`;
  };

  return (
    <header className="navbar">
      <nav className="navbar__nav">
        <div className="navbar__nav-list">
          {navLinks.map(({ label, pathname, hash }) => (
            <NavLink
              exact
              className={classname("navbar__nav-link")}
              activeClassName="navbar__nav-link--active"
              isActive={(match) => isMatch({ match, hash })}
              onClick={handleNavClick}
              key={label}
              to={{ pathname, hash, state: hashKey }}
              onMouseUp={blurOnMouseUp}
            >
              {label}
            </NavLink>
          ))}
        </div>

        <div className="email__link">
          <a className="email__link__a" href="www.elsiemade.com">
            by : www.elsiemade.com
          </a>
        </div>
      </nav>
    </header>
  );
}

export default memo(Navbar);
