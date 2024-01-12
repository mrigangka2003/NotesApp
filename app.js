require("dotenv").config();
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const connectDB = require("./server/config/db");
const session = require("express-session");
const mongoStore = require("connect-mongo");
const passport = require("passport");
const methodOverride = require("method-override");

const app = express();
const port = 5000 || process.env.PORT;

//middlewares
app.use(session({ 
    secret: "inki Pinki Ponki", 
    resave: true, 
    saveUninitialized: true,
    store:mongoStore.create({
        mongoUrl : process.env.MONGODB_URI
    })
 })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride("_method"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

connectDB();

//static files
app.use(express.static("public"));

//templating engine
app.use(expressLayouts);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

//routes
app.use("/", require("./server/routes/auth"));
app.use("/", require("./server/routes/index"));
app.use("/", require("./server/routes/dashboard.js"));

//handle 404
app.get("*", (req, res) => {
  res.status(404).render("404");
});

app.listen(port, () => {
  console.log(`Server is listening to port ${5000}`);
});
