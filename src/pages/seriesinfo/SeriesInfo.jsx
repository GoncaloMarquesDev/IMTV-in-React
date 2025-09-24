import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import CastCard from "../../components/castcard/CastCard";
import CrewCard from "../../components/crewcard/CrewCard";
import MoreLikeThis from "../../components/morelikethis/MorelikeThis";
import Loading from "../../components/loading/Loading";
import "./SeriesInfo.css";
import MediaHero from "../../components/mediahero/MediaHero"; 
import MediaDetail from "../../components/mediadetail/MediaDetail";

function SeriesInfo() {
  const { id } = useParams();
  const [serie, setSerie] = useState(null);

  const [selectedSeriesId, setSelectedSeriesId] = useState(id);

  const genres = serie?.genres;
  const genresById = genres?.map((genre) => genre.id);
  const genresByIdString = genresById?.join(",");

  const serieInfoRef = useRef(null);

  const scrollToInfo = () => {
    if (serieInfoRef.current) {
      serieInfoRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const fetchTvShow = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzJjMmNlNjZlNDFjMjkyOTg5OWJiMjU2ZjFjNGRiNSIsIm5iZiI6MTc1NDA4NjQ1MC43OTcsInN1YiI6IjY4OGQzYzMyZTllOTc2YjI1Y2RlNjIwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A2s0Jbc8bApWe7beNwRy8GcGQ1tk6bgNCbq1m4pH-Dg",
        },
      };

      const response = await fetch(
        `https://api.themoviedb.org/3/tv/${id}`,
        options
      );
      const data = await response.json();
      setSerie(data);
    };

    if (id) fetchTvShow();
  }, [id]);

  if (!serie) return <Loading />;
  if (serie.success === false) return <p>Serie não encontrada.</p>;

  return (
    <div>
      <section
        className="hero-serie"
        style={{
          backgroundImage: serie?.backdrop_path
            ? `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://image.tmdb.org/t/p/w1280${serie.backdrop_path})`
            : "none",
        }}
      >
        <div className="serie-hero-content">
          <MediaHero media={serie} mediaInfoRef={serieInfoRef} /> 
          <MediaDetail media={serie} />
        </div>
      </section>

      <div className="serie-content">
        <div className="serie-overview">
          <h1>Overview</h1>
          <p>{serie.overview}</p>
        </div>
      </div>

      <div className="serie-cast">
        <CastCard id={id} type={"tv"} />
        <CrewCard id={id} type={"tv"} />
        <MoreLikeThis
          type={"tv"}
          genres={genresByIdString}
          movieId={selectedSeriesId}
          onSelectMovie={(id) => setSelectedSeriesId(id)}
          onMovieClick={scrollToInfo}
        />
      </div>
    </div>
  );
}

export default SeriesInfo;
