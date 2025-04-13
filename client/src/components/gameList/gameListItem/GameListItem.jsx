export default function GameListItem({
    _id,
    titel,
    category,
    imageUrl
}) {
  return (
    <div className="allGames">
      <div className="allGames-info">
        <img src={imageUrl} />
        <h6>{category}</h6>
        <h2>{titel}</h2>
        <a href="#" className="details-button">
          Details
        </a>
      </div>
    </div>
  );
}
 