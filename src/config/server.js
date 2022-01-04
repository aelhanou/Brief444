const express = require("express");
const cors = require("cors");
require('dotenv').config()
const db = require("./db")
const session = require("express-session")
const mysqlStore = require('express-mysql-session')(session);
const { loginRoutes, questionRoutes, dashboardRoutes, subjectRoutes, testRoutes } = require("../controllers")
const { NotFoundRoutes } = require("../middleware")

const app = express();
const path = require('path');


const sessionStore = new mysqlStore({
  expiration: 1000 * 60 * 60 * 2,
  createDatabaseTable: true,
  schema: {
    tableName: "sessions",
    columnNames: {
      session_id: "session_id",
      expires: "expires",
      data: "data"
    }
  }

}, db);


// Setting EJS as templating engine
app.set('views', path.join(process.cwd() + '/src', 'views'));
app.set('view engine', 'ejs');

app.use(session({
  secret: "zer0",
  resave: false,
  saveUninitialized: true,
  store: sessionStore,
  cookie: {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 2,
    sameSite: true,
  }
}))

app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(process.cwd() + '/src', 'public'))); //  "public" off of current is root


// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome BRO." });
});


// routes
app.use(loginRoutes)
app.use(questionRoutes)
app.use(dashboardRoutes)
app.use(subjectRoutes)
app.use(testRoutes)


// not Found
app.use(NotFoundRoutes)



module.exports = app