const routes = require("express").Router();
const controllerApiFake = require("./apifakeController");


routes.get("/get_info_api", controllerApiFake.getApiFakeController);
routes.post("/save_info_api", controllerApiFake.saveApiFakeController);
routes.put("/update_info_api", controllerApiFake.putApiFakeController);
routes.delete("/delete_info_api/:id", controllerApiFake.deleteApiFakeController);

module.exports = routes;

