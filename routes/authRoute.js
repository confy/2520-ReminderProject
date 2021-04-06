const express = require("express");
const passport = require("../middleware/passport");
const { forwardAuthenticated } = require("../middleware/checkAuth");
const database = require("../database")

const router = express.Router();

//Unsplash setup
const fetch  = require("node-fetch")
const { createApi } =require("unsplash-js")

global.fetch = fetch;
const unsplash = createApi({
  accessKey: process.env.UNSPLASH_ACCESS,
  fetch: fetch
})

const randomAnimals = ["dog", "cat", "wolf", "bird", "fennec"]

const randomAnimal = () => {
  return randomAnimals[Math.floor(Math.random() * randomAnimals.length)];
}

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
      unsplash.photos.getRandom({
        query: randomAnimal(),
        featured: true
      }).then(result => {
        switch (result.type) {
          case 'error':
            console.log('unsplash error occurred: ', result.errors[0]);
          case 'success':
            const photo = result.response;
            photoSmall = photo.urls.full + '&h=120'
            const password = req.body.password
            const id = Math.floor(Math.random() * 13717)
            database.push({
              id: id, 
              email: email, 
              password: password, 
              reminders: [], 
              friends: [],
              profilePic: photoSmall
            })
            res.redirect("/auth/login")
        }
      })
      
    }
  }
)
// router.get("/logout", (req, res) => {
//     req.logout();
//     res.redirect("/login");
// });

module.exports = router;