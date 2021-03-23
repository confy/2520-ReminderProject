const express = require("express");
const passport = require("../middleware/passport");
const { forwardAuthenticated } = require("../middleware/checkAuth");

const router = express.Router();

router.get("/", forwardAuthenticated, (req, res) => res.render("auth/login"));
//forwardAuthenticated,
router.post(
    "/",
    passport.authenticate("local", {
        successRedirect: "reminder/index",
        failureRedirect: "/login",
    })
);

// router.get("/logout", (req, res) => {
//     req.logout();
//     res.redirect("/login");
// });

module.exports = router;