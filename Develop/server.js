//Dependencies
//npm package needed for server functionality
const express = require("express");

//tells node that we are creating an "express" server
const app = express();

//setting up the initial port, listener will be used for heroku
const PORT = process.env.PORT || 8080;

//data parsing for express app (middleware)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//route file, a map of how to respond when users visit or request data from the URLs
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//port listener, starts server
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});