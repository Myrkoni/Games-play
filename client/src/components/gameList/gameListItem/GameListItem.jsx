import { Link } from "react-router-dom";

export default function GameListItem({ _id, titel, category, imageUrl }) {
  return (
    <div className="allGames">
      <div className="allGames-info">
        <img src={imageUrl} />
        <h6>{category}</h6>
        <h2>{titel}</h2>
        <Link to={`/games/${_id}/details`} className="details-button">
          Details
        </Link>
      </div>
    </div>
  );
}
