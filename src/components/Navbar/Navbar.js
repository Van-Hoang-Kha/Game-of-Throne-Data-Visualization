import { useState, memo } from "react";
import { NavLink, Link as RouterLink } from "react-router-dom";
import { navLinks, blurOnMouseUp } from "../../utils/contents.util";
import "./Navbar.css";

function Navbar({ location }) {
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
              className="navbar__nav-link"
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
          <a className="email__link__a" href="mailto:eunbyuc@gmail.com">
            by : github.com/elsie-c
          </a>
        </div>
      </nav>
    </header>
  );
}

export default memo(Navbar);
