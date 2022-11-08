import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <nav
        className="navbar fixed-top navbar-expand-lg "
        style={{ zIndex: "1" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand " to="/">
            <img
              src="assets/images/logo.svg"
              className="img-fluid "
              // style={{ width: "100%" }}
              alt="logo"
            />
          </Link>
          <form className="d-flex mx-4 ">
            <input
              className="form-control  me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav    text-center mb-2  mb-lg-0">
              <li className="nav-item ">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                >
                  Marketplace
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Drops
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Brands
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link creat" to="#">
                  Create
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link sign_in" to="/">
                  Sign in
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/signup">
                  SignUp
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link sign_up" to="#">
                  English
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;