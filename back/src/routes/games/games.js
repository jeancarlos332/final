const routes = require("express").Router();
const controllerGames = require("./games/gamesInfoController");


routes.get("/get_info_games", controllerGames.getGamesInfoController);
routes.post("/save_info_games", controllerGames.saveGamesInfoController);
routes.put("/update_info_games", controllerGames.putGamesInfoController);
routes.delete("/delete_info_games/:id", controllerGames.deleteGamesInformationController);

module.exports = routes;
