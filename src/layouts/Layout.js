import MainNavbar from "./MainNavbar";
import classes from "./Layout.module.css";

function Layout(props) {
  return (
    <div>
      <MainNavbar />
      <div className={classes.main}>{props.children}</div>
    </div>
  );
}

export default Layout;
