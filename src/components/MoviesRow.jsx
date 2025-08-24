// import MovieCard from "./MovieCard";
// import "../index.css"; // ou usa styled-components / Tailwind se preferires

// function MoviesRow({ title, movies, layout = "grid" }) {
//   return (
//     <div className={`movies-row ${layout}`}>
//       <h2>{title}</h2>

//       <div className={`movies-container ${layout}`}>
//         {movies.map((movie) => (
//           <MovieCard
//             key={movie.id}
//             title={movie.title}
//             year={movie.release_date?.slice(0, 4)}
//             img={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default MoviesRow;