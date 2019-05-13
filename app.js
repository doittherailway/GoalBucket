const express = require("express");
const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;

const users = require("./routes/api/users");
const tweets = require("./routes/api/tweets");
const bodyParser = require('body-parser');
const passport = require('passport');

mongoose
    .connect(db, { useNewUrlParser: true, dbName: "MERNdb" })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

// app.get("/", (req, res) => res.send("Hello Yo"));
app.use(passport.initialize());
require('./config/passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/stylesheets", express.static(__dirname + '/frontend/public/stylesheets'));
app.use("/api/users", users);
app.use("/api/tweets", tweets);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
