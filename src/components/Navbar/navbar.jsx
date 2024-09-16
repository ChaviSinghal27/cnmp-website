import logo from "../../Images/logo.svg";
import "./navbar.css";
export default function Navbar() {
  return (
    <div className="Navbar">
      <nav className="navbar navbar-expand-lg shadow-sm fixed-top ">
        <div className="container-fluid">
          <div>
            <a href="#" className=".navbar-brand">
              <img src={logo} />
            </a>
          </div>
          <div>
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
            <div
              className=" collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <a href="#section3" className="nav-link p-3 ms-3">
                    Get To Know Us
                  </a>
                </li>

                <li className="nav-item">
                  <a href="#section9" className="nav-link p-3 ms-3">
                    Lending Services
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#section11-bottom" className="nav-link p-3 ms-3">
                    CNMP Advantages
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#footer" className="nav-link p-3 ms-3">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
