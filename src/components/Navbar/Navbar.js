import { useState, memo } from "react";
import { NavLink, Link as RouterLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { navLinks, blurOnMouseUp } from "../../utils/contents.util";
import "./Navbar.css";
import Icon from "../../images/danyIcon.png";

function Navbar({ location, navbarColor }) {
  const [hashKey, setHashKey] = useState();

  const handleNavClick = () => {
    setHashKey(Math.random().toString(32).substr(2, 8));
  };

  const isMatch = ({ match, hash = "" }) => {
    if (!match) {
      if (`/${hash}` == location.pathname) {
        return true;
      }
      return false;
    }
    return `${match.url}${hash}` === `${location.pathname}${location.hash}`;
  };

  return (
    <>
      <header className="navbar">
        <nav className="navbar__nav">
          <div className="navbar__nav-list">
            {navLinks.map(({ label, pathname, hash }) => {
              return (
                <HashLink
                  className="navbar__nav-link"
                  key={label}
                  to={`${pathname}${hash}`}
                >
                  <NavLink
                    exact
                    className="navbar__inner"
                    activeClassName="navbar__nav-link--active"
                    isActive={(match) => isMatch({ match, hash })}
                    onClick={handleNavClick}
                    key={label}
                    to={{ pathname, hash, state: hashKey }}
                    onMouseUp={blurOnMouseUp}
                  >
                    {label}
                  </NavLink>
                </HashLink>
              );
            })}
          </div>

          <div className="email__link">
            <a
              className="email__link__a"
              href="https://www.elsiemade.com"
              target="_blank"
            >
              by : www.elsiemade.com
            </a>
          </div>
        </nav>
      </header>

      {/* <header>
        <nav>
          <div class="dropdown">
            <div class="projects">
              <button
                class="menu__dropdown"
                onClick={() => console.log("hello")}
              >
                <img class="menuIcon" src={Icon} alt="M" />
              </button>

              <div class="menu__dropdown__lists">
                {navLinks.map(({ label, pathname, hash }) => {
                  console.log("hello");

                  return;
                  <HashLink
                    class="menu__dropdown__item"
                    key={label}
                    to={`${pathname}${hash}`}
                  >
                    <NavLink
                      exact
                      activeClassName="navbar__nav-link--active"
                      isActive={(match) => isMatch({ match, hash })}
                      onClick={handleNavClick}
                      key={label}
                      to={{ pathname, hash, state: hashKey }}
                      onMouseUp={blurOnMouseUp}
                    >
                      {label}
                    </NavLink>
                  </HashLink>;
                })}
              </div>
            </div>
          </div>
        </nav>
      </header> */}
    </>
  );
}

export default memo(Navbar);
