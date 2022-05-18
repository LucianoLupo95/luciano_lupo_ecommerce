import React from "react";
import { CartWidget } from "../CartWidget/CartWidget";
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/" className="text-decoration-none">        
          <a className="navbar-brand" href="#">
            Anata <br/>Pet Shop
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="text-decoration-none">
                <a className="nav-link active" aria-current="page" href="#">
                  Inicio
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="text-decoration-none">
                <a className="nav-link" href="#">
                  Productos
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/AboutUs" className="text-decoration-none">
                <a
                  className="nav-link"
                  href="#"
                  tabIndex="-1"
                >
                  Sobre Nosotros
                </a>
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Buscar"
              aria-label="Search"
            />
          </form>
          <button className="btn btn-outline-success" type="submit">
              Buscar
          </button>
          <CartWidget color='#28a745' fontSize="color"/>
        </div>
      </div>
      
    </nav>
  );
};

export default Navbar;
