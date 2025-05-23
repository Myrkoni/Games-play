import requester from "./requester";

const BSE_URL = "http://localhost:3030/jsonstore/games";

const buildUrl = (gameId) => `${BSE_URL}/${gameId}/comments`;

const create = async (gameId, username, text) =>
  requester.post(buildUrl(gameId), { username, text });
const getAll = async (gameId) => {
  const result = await requester.get(buildUrl(gameId));
  const comments = Object.values(result);

  return comments;
};

const commentsAPI = {
  create,
  getAll,
};

export default commentsAPI;