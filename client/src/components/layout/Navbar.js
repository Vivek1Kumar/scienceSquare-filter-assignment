import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
  
	render() {   
		return(
		<nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">
            ScienceSquare App
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>
         
        </div>
        <ul>
            <Link className="btn btn-info" to="/add">
              Add new
            </Link>
          </ul>
          <ul>
            <Link className="btn btn-info" to="/contactus-list">
              Contactus list
            </Link>
          </ul>
      </nav>
		)
	}
}

export default Navbar;