import { BrowserRouter, Route, Routes } from "react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./styles/reset.css";

import NotFound from "./components/NotFound.jsx";
import NavBar from "./components/NavBar.jsx";
import MoviesList from "./components/MoviesList.jsx";
import MovieInfo from "./components/MovieInfo.jsx";
import { AiringTodayProvider } from "./context/AirinTodayContext.jsx";
import SeriesList from "./components/SeriesList.jsx";
import SeriesInfo from "./components/SeriesInfo.jsx";
import { ThemeProvider } from "./components/ThemeContext.jsx";
import { FavoritesProvider } from "./components/FavoriteContext.jsx";
import FavoritesPage from "./components/FavoritesPage.jsx";
import { Navigate } from "react-router";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <FavoritesProvider>
        <NavBar />
        <AiringTodayProvider>
          <Routes>
            <Route path="/" element={<Navigate to="/movieslist" />} />
            <Route path="/movieslist" element={<MoviesList />} />
            <Route path="/movie/:id" element={<MovieInfo />} />
            <Route path="/tvlist" element={<SeriesList />} />
            <Route path="/tv/:id" element={<SeriesInfo />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </AiringTodayProvider>
        </FavoritesProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
