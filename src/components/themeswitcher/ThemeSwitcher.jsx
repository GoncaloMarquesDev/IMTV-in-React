import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import "./ThemeSwitcher.css";

function ThemeSwitcher() {
  const { toggleLight, toggleDark } = useContext(ThemeContext);

  return (
    <div>
      <button className="theme-toggle" title="Light mode" onClick={toggleLight}>
        <MdLightMode />
      </button>
      <button className="theme-toggle" title="Dark mode" onClick={toggleDark}>
        <MdDarkMode />
      </button>
    </div>
  );
}

export default ThemeSwitcher;
