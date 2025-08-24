// AiringTodayContext.jsx
import { createContext, useState, useEffect, useContext } from "react";

// 1. Criar o Context
const AiringTodayContext = createContext(null);

// 2. Criar o Provider
function AiringTodayProvider({ children }) {
  const [airingToday, setAiringToday] = useState({ results: [] });

  useEffect(() => {
    const fetchAiringSeries = async () => {
      const response = await fetch("https://api.themoviedb.org/3/tv/on_the_air", {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzJjMmNlNjZlNDFjMjkyOTg5OWJiMjU2ZjFjNGRiNSIsIm5iZiI6MTc1NDA4NjQ1MC43OTcsInN1YiI6IjY4OGQzYzMyZTllOTc2YjI1Y2RlNjIwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A2s0Jbc8bApWe7beNwRy8GcGQ1tk6bgNCbq1m4pH-Dg", // ⚠️ Lembra-te de substituir por uma variável de ambiente
        },
      });
      const data = await response.json();
      setAiringToday(data);
    };

    fetchAiringSeries();
  }, []);

  return (
    <AiringTodayContext.Provider value={{ airingToday, setAiringToday }}>
      {children}
    </AiringTodayContext.Provider>
  );
}

// 3. Hook personalizado
const useAiringToday = () => useContext(AiringTodayContext);

// 4. Exportar tudo
export { AiringTodayProvider, useAiringToday };