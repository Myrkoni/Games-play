import { Link } from "react-router-dom";

export default function LatestGame({_id, titel, imageUrl}) {
  return (
    <div className="game">
      <div className="image-wrap">
        <img src={imageUrl} />
      </div>
      <h3>{titel}</h3>
      <div className="rating">
        <span>☆</span>
        <span>☆</span>
        <span>☆</span>
        <span>☆</span>
        <span>☆</span>
      </div>
      <div className="data-buttons">
        <Link to={`/games/${_id}/details`} className="btn details-btn">
          Details
        </Link>
      </div>
    </div>
  );
}
