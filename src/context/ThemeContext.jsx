import { createContext, useState, useEffect } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("default");

  const toggleLight = () => {
    setTheme(prev => (prev === "light" ? "default" : "light"));
  };

  const toggleDark = () => {
    setTheme(prev => (prev === "dark" ? "default" : "dark"));
  };

  // Aplica a classe ao <body> sempre que o tema muda
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleLight, toggleDark }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider };
