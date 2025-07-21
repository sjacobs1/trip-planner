import { Link } from "react-router-dom";

export default function TopNav() {
  return (
    <div className="navbar bg-neutral text-neutral-content shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 text-neutral-content rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/discoverPlacesPage">Discover</Link>
            </li>
            <li>
              <Link to="/planTripPage">Plan a Trip</Link>
            </li>
            <li>
              <Link to="/myTripsPage">My Trips</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          TripPlanner
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/discoverPlacesPage">Discover</Link>
          </li>
          <li>
            <Link to="/planTripPage">Plan</Link>
          </li>
          <li>
            <Link to="/myTripsPage">My Trips</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn">Login</button>
      </div>
    </div>
  );
}
