import { useEffect, useState } from "react";
import PersonCard from "../personcard/PersonCard";
import "./CrewCard.css";

function CrewCard({ id, type }) {
  const [crewMenbers, setcrewMenbers] = useState([]);
  console.log("crew list", crewMenbers);

  useEffect(() => {
    const fetchCrew = async () => {
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
        setcrewMenbers(data.crew || []);
      } catch (error) {
        console.error("Error fetching crew:", error);
      }
    };

    if (id) fetchCrew();
  }, [id, type]);

  if (!id) return <p>Loading...</p>;

  return (
    <div className="crew">
      <h1>Crew</h1>
      {crewMenbers.length === 0 ? (
        <p>No crew or Loading...</p>
      ) : (
        <div className="crew-content">
          {crewMenbers.map((crew) => (
            <PersonCard
              key={crew.credit_id}
              name={crew.name}
              role={crew.department}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default CrewCard;
