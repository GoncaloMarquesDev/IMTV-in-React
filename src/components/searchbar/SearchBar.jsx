/* Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzJjMmNlNjZlNDFjMjkyOTg5OWJiMjU2ZjFjNGRiNSIsIm5iZiI6MTc1NDA4NjQ1MC43OTcsInN1YiI6IjY4OGQzYzMyZTllOTc2YjI1Y2RlNjIwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A2s0Jbc8bApWe7beNwRy8GcGQ1tk6bgNCbq1m4pH-Dg` */
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import "./SearchBar.css";

function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const wrapperRef = useRef(null);

  // Fecha dropdown ao clicar fora
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearch = async (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() === "") {
      setResults([]);
      setShowDropdown(false);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/multi?query=${encodeURIComponent(
          value
        )}`,
        {
          headers: {
            accept: "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzJjMmNlNjZlNDFjMjkyOTg5OWJiMjU2ZjFjNGRiNSIsIm5iZiI6MTc1NDA4NjQ1MC43OTcsInN1YiI6IjY4OGQzYzMyZTllOTc2YjI1Y2RlNjIwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A2s0Jbc8bApWe7beNwRy8GcGQ1tk6bgNCbq1m4pH-Dg`, // teu token
          },
        }
      );

      if (!res.ok) throw new Error("Error searching");

      const data = await res.json();

      const filteredResults = (data.results || []).filter(
        (item) => item.media_type === "movie" || item.media_type === "tv"
      );
console.log("Resultados filtrados:", filteredResults); 
      setResults(filteredResults);
      setShowDropdown(true);
    } catch (err) {
      console.error(err);
      setError("Erro ao obter resultados");
    } finally {
      setLoading(false);
    }
  };

  const handleSelect = () => {
    setShowDropdown(false);
    setQuery("");
  };

  return (
    <div className="searchbar-container" ref={wrapperRef}>
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search here movie or tv-shows..."
        className="search-bar-input"
      />

      {showDropdown && (
        <ul className="searchbar-dropdown">
          {loading && <li>Loading...</li>}
          {error && <li>{error}</li>}
          {!loading &&
            !error &&
            results.length === 0 &&
            query.trim() !== "" && <li>No results for "{query}"</li>}
          {!loading &&
            !error &&
            results.map((item) => (
              <li key={item.id} onClick={handleSelect}>
                <Link to={`/${item.media_type}/${item.id}`}>
                  {item.title || item.name}{" "}
                  <span>
                    ({item.media_type === "movie" ? "Movie" : "Tv-show"})
                  </span>
                </Link>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
