import { SiAnaconda } from "react-icons/si";
import { Link } from "react-router-dom";

import classes from "./MainNavbar.module.css";

function MainNavbar() {
  return (
    <nav className={classes.navbar}>
      <div className={classes.logo}>
        <SiAnaconda />
      </div>
      <ul>
        <li>
          <Link to="/">All Meetups</Link>
        </li>
        <li>
          <Link to="/new-meetup">Add New Meetup</Link>
        </li>
        <li>
          <Link to="/favorites">My Favorites</Link>
        </li>
      </ul>
    </nav>
  );
}

export default MainNavbar;
