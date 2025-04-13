// import { useEffect } from "react";
// import * as request from "../../api/requester";
import { useEffect, useState } from "react";
import * as gamesAPI from "../../api/games-api";
import GameListItem from "./gameListItem/GameListItem";

export default function GameList() {
  // useEffect(() => {
  //   (async () => {
  //     //  const gamesResult = await request('GET', 'http://localhost:3030/jsonstore/games')
  //     const gamesResult = await request.get("http://localhost:3030/jsonstore/games");
  //   })();
  // });
  const [games, setGames] = useState([]);

  useEffect(() => {
    gamesAPI.getAll().then(result => setGames(result));
  }, []);

  return (
    <section id="catalog-page">
      <h1>All Games</h1>
    
      {games.length > 0 ? 
        games.map((game) => <GameListItem key={game._id} {...game} />)
      :
        <h3 className="no-articles">No articles yet</h3>
      }

    </section>
  );
}
