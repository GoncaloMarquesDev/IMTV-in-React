import { Link } from "react-router";
import SearchBar from "../searchbar/SearchBar";
import { useContext, useState } from "react";
import { ThemeContext } from "../themecontext/ThemeContext";
import ThemeSwitcher from "../themeswitcher/ThemeSwitcher";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import "./NavBar.css";

function NavBar() {
  const { theme, toggleLight, toggleDark } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  console.log("estado butao", theme);

  return (
    <div className="wrapper">
    <div className="nav-bar">
      <h3>IMTV</h3>
      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>
      <ul className={open ? "active" : ""}>
        <li>
          <Link
            to={"/movieslist"}
            onClick={handleClose}
            className="btnprimary "
          >
            Movies
          </Link>
        </li>
        <li>
          <Link to={"/tvlist"} onClick={handleClose} className="btnsecundary ">
            TV
          </Link>
        </li>
        <li>
          <SearchBar />
        </li>
        <li>
          <Link to="/favorites" onClick={handleClose}>
            Favorites
          </Link>
        </li>
      </ul>

      <ThemeSwitcher />
    </div>
    </div>
  );
}
export default NavBar;
