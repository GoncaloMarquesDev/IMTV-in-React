import CardMoviesSeries from "./CardMoviesSeries";


function SerieCard({ img, title, year }) {
  /* console.log("props", img,title,year) */

  return (
    <CardMoviesSeries>
      <img src={img} alt="" />
      <h4>{title}</h4>
      <h3>{year}</h3>
    </CardMoviesSeries>
  );
}
export default SerieCard;