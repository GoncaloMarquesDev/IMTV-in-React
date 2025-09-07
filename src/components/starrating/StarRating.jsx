// src/components/StarRating.jsx
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";


function StarRating({ rating }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={`full-${i}`} color="gold" />);
  }

  if (hasHalfStar) {
    stars.push(<FaStarHalfAlt key="half" color="gold" />);
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(<FaRegStar key={`empty-${i}`} color="gold" />);
  }

  return <div className="stars">{stars}</div>;
}

export default StarRating;