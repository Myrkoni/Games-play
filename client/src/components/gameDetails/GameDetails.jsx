import { useState } from "react";
import { useParams } from "react-router-dom";
import commentsApi from "../../api/commentsApi";
import { useGetOneGames } from "../../hooks/useGames";

export default function GameDetails() {
  const { gameId } = useParams();
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");
  const [game, setGame] = useGetOneGames(gameId);


  const comentSubmutHandler = async (e) => {
    e.preventDefault();

    const newComment = await commentsApi.create(gameId, username, comment);

    setGame((prevState) => ({
      ...prevState,
      comments: {
        ...prevState.comments,
        [newComment._id]: newComment,
      },
    }));

    setUsername('');
    setComment('');
  };

  return (
    <section id="game-details">
      <h1>Game Details</h1>
      <div className="info-section">
        <div className="game-header">
          <img className="game-img" src={game.imageUrl} />
          <h1>{game.titel}</h1>
          <span className="levels">MaxLevel:{game.maxlevel}</span>
          <p className="type">{game.category}</p>
        </div>

        <p className="text">{game.sumary}</p>

        {/* <!-- Bonus ( for Guests and Users ) --> */}
        <div className="details-comments">
          <h2>Comments:</h2>
          <ul>
            {/* <!-- Display paragraph: If there are no games in the database --> */}
            {Object.keys(game.comments || {}).length > 0 ? (
              Object.values(game.comments).map((comment) => (
                <li key={comment._id} className="comment">
                  <p>
                    {comment.username}: {comment.text}
                  </p>
                </li>
              ))
            ) : (
              <p className="no-comment">No comments.</p>
            )}
          </ul>
        </div>

        {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
        <div className="buttons">
          <a href="#" className="button">
            Edit
          </a>
          <a href="#" className="button">
            Delete
          </a>
        </div>
      </div>

      {/* <!-- Bonus -->
        <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) --> */}
      <article className="create-comment">
        <label>Add new comment:</label>
        <form className="form" onSubmit={comentSubmutHandler}>
          <input
            type="text"
            placeholder="Pesho"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <textarea
            name="comment"
            placeholder="Comment......"
            onChange={(e) => setComment(e.target.value)}
            value={comment}
          ></textarea>
          <input className="btn submit" type="submit" value="Add Comment" />
        </form>
      </article>
    </section>
  );
}
