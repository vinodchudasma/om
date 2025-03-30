import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      localStorage.removeItem("data");
      navigate("/");
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg naav">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"> 
            <span className="first-letter">O</span>M 
            <span className="first-letter">H</span>OSIERY
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><Link className="nav-link" to="/home">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/shop">Shop</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/content">Content</Link></li>
            </ul>
            <button onClick={handleLogout} className="btn btn-danger logout-btn">Logout</button>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
