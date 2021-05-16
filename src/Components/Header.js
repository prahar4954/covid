import React from 'react';
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

const Header = (props) => {
	let headerstyle = {
	    position:"fixed",
	    top:"0",
	    width:"100%"
  	}
    return (
    	<>
    	<nav className="navbar navbar-expand-lg navbar-light bg-light " style={headerstyle} >
		  <div className="container-fluid">
          <Link className="navbar-brand" to="/">
          <img src="https://mcmscache.epapr.in/mcms/393/5322d022aea837347e0f38bd9774f266b5be67fe.png" height="30" width="30" />
          {/*<span> {props.title}</span>*/}
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Coid19Tracker</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/vaccine">Vaccination</Link>
              </li> 
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
            </ul>
            { props.searchBar? <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>: ""}
          </div>
        </div>
		</nav>
		</>
    );
};

Header.displayName = 'Header';
Header.defaultProps = {
  title: "Your Title Here",
  searchBar: true
}

Header.propTypes = {
  title: PropTypes.string,
  searchBar: PropTypes.bool.isRequired
}

export default Header;
