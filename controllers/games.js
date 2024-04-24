const { writeData } = require("../utils/data"); // Чтение и запись данных в JSON-файл
  

const sendAllGames = async (req, res) => {
  res.send(req.games);
};

const sendUpdatedGames = async (req, res) => {
  res.send({
    games: req.games,
    updated: req.game
  });
}


module.exports = {
  sendAllGames,
  sendUpdatedGames
}