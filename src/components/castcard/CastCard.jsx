import { useEffect, useState } from "react";
import PersonCard from "../personcard/PersonCard";
import "./CastCard.css";

function CastCard({ id, type }) {
  const [casts, setCasts] = useState([]);
  console.log("cast", casts);
  console.log("type dentro do cast ", type);

  useEffect(() => {
    const fetchCast = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzJjMmNlNjZlNDFjMjkyOTg5OWJiMjU2ZjFjNGRiNSIsIm5iZiI6MTc1NDA4NjQ1MC43OTcsInN1YiI6IjY4OGQzYzMyZTllOTc2YjI1Y2RlNjIwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A2s0Jbc8bApWe7beNwRy8GcGQ1tk6bgNCbq1m4pH-Dg",
        },
      };

      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/${type}/${id}/credits`,
          options
        );
        const data = await response.json();
        setCasts(data.cast || []);
      } catch (error) {
        console.error("Error fetching cast:", error);
      }
    };

    if (id) fetchCast();
  }, [id, type]);

  if (!id) return <p>Loading...</p>;

  return (
    <div>
      <h1>Cast</h1>
      {casts.length === 0 ? (
        <p>No cast or Loading...</p>
      ) : (
        <div className="cast-content">
          {casts.map((cast) => (
            <PersonCard
              key={cast.id}
              img={
                cast.profile_path
                  ? `https://image.tmdb.org/t/p/w200${cast.profile_path}`
                  : "/default.jpg"
              }
              name={cast.name}
              role={cast.character}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default CastCard;
