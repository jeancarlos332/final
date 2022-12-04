const express = require("express");
const mysql = require("mysql");
const dbConn = require("express-myconnection");
const db = require("./config/database");
const routes = require("./routes/routes");
const cors = require("cors");
const errorMiddleware = require("./middleware/error");

const app = express();


app.use(cors());
app.set("port", process.env.PORT || 5000);
app.use(dbConn(mysql, db, "single"));
app.use(express.json());
app.use("/api", routes);
app.use(errorMiddleware);



// Server running
app.listen(app.get("port"), () => {
  console.log("Server running on port", app.get("port"));
});


module.exports = app;