import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div>
       <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
    <div className="container">
      <a className="navbar-brand" href="index.html">
        <img src="assets/img/logo.png" className="logo" alt=""/>
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul className="navbar-nav">
          <li className="nav-item active mr-3">
            <a className="nav-link" href="index.html">Home</a>
          </li>
          <li className="nav-item mr-3">
            <a className="nav-link" href="about.html">About</a>
          </li>
          <li className="nav-item mr-3">
            <a className="nav-link" href="listings.html">Featured Listings</a>
          </li>
        </ul>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item mr-3">
            <NavLink className="nav-link" to="/register">
              <i className="fas fa-user-plus"></i> Register</NavLink>
          </li>
          <li className="nav-item mr-3">
            <NavLink className="nav-link" to="/login">
              <i className="fas fa-sign-in-alt"></i>
              Login</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    </div>
  )
}

export default Header
