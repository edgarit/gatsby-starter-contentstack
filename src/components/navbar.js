import React from 'react'
import { Link } from 'gatsby'
//import github from '../img/github-icon.svg'
//import logo from '../images/logo.png'
import Logo from './logo'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
                  <Logo></Logo>
 {/*}             <img src={logo} alt="AOK Systems GmbH" style={{  }} />*/}
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              role="button"
              tabIndex={0}
              onKeyDown={() => this.toggleHamburger()}
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/blogs">
                UNTERNEHMEN
              </Link>
              <Link className="navbar-item" to="/blogs">
                PRODUKTE
              </Link>
              <Link className="navbar-item" to="/blogs">
                KARRIERE
              </Link>
              <Link className="navbar-item" to="/blogs">
                NEWS
              </Link>
              <Link className="navbar-item" to="/blogs">
                TERMINE
              </Link>
              <Link className="navbar-item" to="/blogs">
                KONTAKT
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar

