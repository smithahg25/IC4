import React from 'react';

const Navigation = ({ setPage }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <ul className="navbar-nav">
          <li className="nav-item">
            <button className="btn btn-link" onClick={() => setPage('login')}>
              Login
            </button>
          </li>
          <li className="nav-item">
            <button className="btn btn-link" onClick={() => setPage('signup')}>
              Sign Up
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
