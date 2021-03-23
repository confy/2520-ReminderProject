const express = require("express");
const path = require("path");
const session = require("express-session");
const ejsLayouts = require("express-ejs-layouts");
const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(ejsLayouts);
app.use(express.json());
app.set("view engine", "ejs");

app.use(
    session({
        secret: "secret",
        resave: false,
        saveUninitialized: false,
        cookie: {
            httpOnly: true,
            secure: false,
            maxAge: 24 * 60 * 60 * 1000,
        },
    })
);

// Middleware for passport
const passport = require("./middleware/passport");
app.use(passport.initialize());
app.use(passport.session());

// Routes start here
const authRoute = require("./routes/authRoute");
const indexRoute = require("./routes/indexRoute");
// Routes to login an authenticated user pages
app.use("/", indexRoute)
app.use("/login", authRoute)


// Implement this in the future
// app.get("/reminder/:id/edit", reminderController.edit);
// app.get("/register", authController.register);
// app.post("/register", authController.registerSubmit);
// // Implement this yourself
// app.post("/reminder/update/:id", reminderController.update);



app.listen(3001, function() {
    console.log(
        "Server running. Visit: localhost:3001/reminders in your browser 🚀"
    );
});