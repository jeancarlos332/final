const routes = require("express").Router();
const games = require("./games/games");
const employees = require("./employees/employees");
const apifake = require("./apifake/apifake");

routes.use("/games", games);
routes.use("/employees", employees);
routes.use("/apifake", apifake);

module.exports = routes;
