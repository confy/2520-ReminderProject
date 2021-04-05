const express = require("express");
const passport = require("../middleware/passport");
const { forwardAuthenticated } = require("../middleware/checkAuth");
const database = require("../database")

const router = express.Router();

// Login routes
router.get("/login", forwardAuthenticated, (req, res) => res.render("auth/login"));
router.post(
    "/login",
    passport.authenticate("local", {
        successRedirect: "/reminder/index",
        failureRedirect: "/login",
    })
);

// Register routes
router.get("/register", forwardAuthenticated, (req, res, next) => { 
  res.render("auth/register", { email: req.query.email, exists: undefined })
})
router.post(
  "/register",
  (req, res) => {
    const email = req.body.email
    if (database.find(user => user.email === email)) {
      res.render("auth/register", { exists: true, email: undefined })
    } else {
      const password = req.body.password
      const id = Math.floor(Math.random() * 13717)
      database.push({
        id: id, 
        email: email, 
        password: password, 
        reminders: [], 
        friends: []
      })
      res.redirect("/auth/login")
    }
  }
)
// router.get("/logout", (req, res) => {
//     req.logout();
//     res.redirect("/login");
// });

module.exports = router;