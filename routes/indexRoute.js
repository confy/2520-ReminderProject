const express = require("express");
const router = express.Router();
const reminderController = require("../controller/reminder_controller")
const friendsController = require("../controller/friend_controller")
const { ensureAuthenticated } = require("../middleware/checkAuth");

router.get("/reminders", ensureAuthenticated, reminderController.list);
router.get("/reminder/new", ensureAuthenticated, reminderController.new);
router.get("/reminder/:id", ensureAuthenticated, reminderController.listOne);
router.get("/reminder/:id/edit", ensureAuthenticated, reminderController.edit);
router.post("/reminder/", ensureAuthenticated, reminderController.create);
router.post("/reminder/update/:id", ensureAuthenticated, reminderController.update);
router.post("/reminder/delete/:id", ensureAuthenticated, reminderController.delete);

router.get("/friends", ensureAuthenticated, friendsController.list)
router.post("/friends/add", ensureAuthenticated, friendsController.add)
module.exports = router;