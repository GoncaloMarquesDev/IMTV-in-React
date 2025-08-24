import { useEffect, useState } from "react";

import PopularSeries from "./PopularSeries";
import TopRatedSeries from "./TopRatedSeries";
import SeriesAiring from "./SeriesAiring";
import Loading from "./Loading";

function SeriesList() {
  const [seriesList, setSeriesList] = useState({ results: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const BASE_URL = "https://api.themoviedb.org/3";
  const TOKEN =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzJjMmNlNjZlNDFjMjkyOTg5OWJiMjU2ZjFjNGRiNSIsIm5iZiI6MTc1NDA4NjQ1MC43OTcsInN1YiI6IjY4OGQzYzMyZTllOTc2YjI1Y2RlNjIwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A2s0Jbc8bApWe7beNwRy8GcGQ1tk6bgNCbq1m4pH-Dg";

  useEffect(() => {
    const fetchSeries = async () => {
      try {
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${TOKEN}`,
          },
        };

        const response = await fetch(
          `${BASE_URL}/tv/popular?page=${page}`,

          options
        );

        if (!response.ok) {
          throw new Error("Loadind ERROR (HTTP " + response.status + ")");
        }

        const data = await response.json();
        setSeriesList(data);
        setTotalPages(data.total_pages);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSeries();
  }, [page]);

  if (loading) return <Loading />;
  if (error) return <div className="error-message">⚠️ {error}</div>;

  return (
    <div className="main-movies">
      <div className="categories">
        <PopularSeries series={seriesList} />

        {/* Botões de navegação */}
        <div className="pagination">
          <button
            className="pagination-button"
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
          >
            ◀ Anterior
          </button>

          <span className="pagination-info">
            Page {page} of {totalPages}
          </span>

          <button
            className="pagination-button"
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={page === totalPages}
          >
            Seguinte ▶
          </button>
        </div>

        <TopRatedSeries />
        <SeriesAiring />
      </div>
    </div>
  );
}

export default SeriesList;
