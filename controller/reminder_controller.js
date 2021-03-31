const getUserById = require('./userController.js').getUserById
var formatRelative = require('date-fns/formatRelative')

let remindersController = {
    list: (req, res) => {
      let friends = []
      req.user.friends.forEach( friend => {
        let user = getUserById(friend)
        friends.push({
          email: user.email,    
          reminders: user.reminders
        })
      })
      console.log("List in reminder_controller")
      console.log(friends)
      res.render("reminder/index", { 
        userFriends: friends,
        reminders: req.user.reminders,
      });
    },

    new: (req, res) => {
        res.render("reminder/create");
    },

    listOne: (req, res) => {
        let reminderToFind = req.params.id;
        let searchResult = req.user.reminders.find(function(reminder) {
            return reminder.id == reminderToFind;
        });
        if (searchResult != undefined) {
            if (searchResult.reminderTime != '') {
                let reminderDay = new Date(searchResult.reminderTime);
                let gap = formatRelative(reminderDay, new Date());
                let formatGap = gap.charAt(0).toUpperCase() + gap.slice(1);
                res.render("reminder/single-reminder", { reminderItem: searchResult, distanceToNow: formatGap });
            } else {
                const formatGap = '';
                res.render("reminder/single-reminder", { reminderItem: searchResult, distanceToNow: formatGap });
            }
        } else {
            res.render("reminder/index", { reminders: req.user.reminders });
        }
    },

    create: (req, res) => {
        let date = req.body.reminderDate;
        let time = req.body.reminderTime;
        let reminderTime = date + 'T' + time;
        let reminder = {
            id: req.user.reminders.length + 1,
            title: req.body.title,
            description: req.body.description,
            completed: false,
            reminderTime: reminderTime,
        };
        console.log(reminder)
        req.user.reminders.push(reminder);
        res.redirect("/reminders");
    },

    edit: (req, res) => {
        let reminderToFind = req.params.id;
        let searchResult = req.user.reminders.find(function(reminder) {
            return reminder.id == reminderToFind;
        });
        res.render("reminder/edit", { reminderItem: searchResult });
    },

    update: (req, res) => {
        let reminderToUpdate = req.params.id;
        let searchIndex = req.user.reminders.findIndex(function(reminder) {
            return reminder.id == reminderToUpdate
        });
        delete req.user.reminders[searchIndex];
        let date = req.body.reminderDate;
        let time = req.body.reminderTime;
        let reminderTime = date + 'T' + time;
        let updatedReminderDict = {
            id: req.body.id,
            title: req.body.title,
            description: req.body.description,
            completed: req.body.completed,
            reminderTime: reminderTime,
        };
        updatedReminderDict.id = reminderToUpdate;
        req.user.reminders.splice(searchIndex, 1, updatedReminderDict)
        if (updatedReminderDict.completed === 'true') {
            updatedReminderDict.completed = true
        } else if (updatedReminderDict.completed === 'false') {
            updatedReminderDict.completed = false
        }
        res.redirect("/reminders");
    },

    delete: (req, res) => {
        let reminderToDelete = req.params.id;
        let searchIndex = req.user.reminders.findIndex(function(reminder) {
            return reminder.id == reminderToDelete
        });
        req.user.reminders.splice(searchIndex, 1);
        res.redirect("/reminders");
    },

    deleteTime: (req, res) => {
        let reminderToDelete = req.params.id;
        let searchIndex = req.user.reminders.find(function(reminder) {
            return reminder.id == reminderToDelete
        });
        searchIndex.reminderTime = '';
        res.redirect(req.get('referer'));
    },
}

module.exports = remindersController;