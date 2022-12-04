const routes = require("express").Router();
const controllerEmployees = require("./employeesController");


routes.get("/get_info_games", controllerEmployees.getEmployeesController);
routes.post("/save_info_games", controllerEmployees.saveEmployeesController);
routes.put("/update_info_games", controllerEmployees.putEmployeesController);
routes.delete("/delete_info_games/:id", controllerEmployees.deleteEmployeesController);

module.exports = routes;
