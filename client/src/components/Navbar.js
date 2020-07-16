import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import '../Styles/Navigation.scss';


class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return(
      <nav className="nav-wrapper">
        <ul className="navbar">
          <li className="navbar__item">
            <a onClick={this.scrollToTop} className="navbar__logo-a">
              <img src="images/face.svg" alt="logo" className="navbar__logo"></img>
              <span className="navbar__logo-text">FACESEARCH</span>
            </a>
          </li>
        </ul>
        <ul className="navbar">
          <li className="navbar__item">
            <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Home
              </Link>
          </li>
          <li className="navbar__item">
            <Link
                activeClass="active"
                to="topTracks"
                spy={true}
                smooth={true}
                duration={500}
              >
                Top Tracks
              </Link>
          </li>
          <li className="navbar__item">
            <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
              >
                About
              </Link>
          </li>
        </ul>
        
      </nav>
      
    )
  }
}

export default Navbar;