const express = require("express");
const RoutesM = require('./routes/male.routes')
const RoutesF = require('./routes/female.routes')


// TODO: Update this
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
const db = require('./database-mysql');
const cors =require("cors")

const app = express();
const PORT = process.env.PORT || 3000


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));

app.use(cors())

app.use("/api/male", RoutesM);
app.use("/api/female", RoutesF);


app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
