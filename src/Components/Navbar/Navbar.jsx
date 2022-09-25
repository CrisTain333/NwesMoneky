import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <>
      <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <span className="text-danger">News</span>/
            <span className="text-warning">Monkey</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse ms-auto" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  <i className="fa-solid fa-house"></i>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">
                  <i className="fa-solid fa-film"></i>Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/general">
                  <i className="fa-solid fa-fire-flame-simple"></i>
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/business">
                  <i className="fa-solid fa-money-bill-trend-up"></i>
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health">
                  <i className="fa-solid fa-volleyball"></i>
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">
                  <i className="fa-solid fa-volleyball"></i>
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">
                  <i className="fa-solid fa-microchip"></i>
                  Technology
                </Link>
              </li>
            </ul>
            <div className=" d-flex align-items-center ms-auto">
            <p className="text-white mt-3 me-3"> {user?user.name:''}</p>

            {
              isAuthenticated ?  <button
              className="btn btn-outline-light"
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                Log Out
              </button> : <button
                className="btn btn-outline-light"
                onClick={() => loginWithRedirect()}
              >
                <i className="fa-solid fa-right-to-bracket"></i> Login
              </button>

            }
              
             
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
