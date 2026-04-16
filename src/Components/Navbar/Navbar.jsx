import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

export default function Navbar() {
  return (
    <div>
      <nav className="bg-info navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand text-danger fs-3 fw-bold m-auto" href="#">Cinema</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page" href="/movie">Movie</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page" href="/actor">Actor</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page" href="/tv">TV</a>
              </li></ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2 text-white" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-light text-black" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}
