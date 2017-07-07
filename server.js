const express         = require("express");
const path            = require("path");
const bodyParser      = require("body-parser");
const validator       = require("express-validator");
const morgan          = require("morgan");
const routes          = require("./routes/router.js");
const todosRoutes      = require('./routes/todos.js');

const app = express();

app.set('port', (process.env.PORT) || 3000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(validator());

app.use( morgan('dev') );

app.use(routes);
app.use("/api/todos", todosRoutes);

app.listen(app.get('port'), (req, res) =>
  console.log("App listening on port ", app.get('port)') ) );