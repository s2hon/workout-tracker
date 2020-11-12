const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;

const app = express();
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", { useNewUrlParser: true })
.then(()=>console.log("connected to mongoDB"))
.catch(err => console.error("could not connect to mongoDB", err));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
