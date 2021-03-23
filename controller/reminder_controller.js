let remindersController = {
    list: (req, res) => {

        res.render("reminder/index", { reminders: req.user.reminders });
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
            res.render("reminder/single-reminder", { reminderItem: searchResult });
        } else {
            res.render("reminder/index", { reminders: req.user.reminders });
        }
    },

    create: (req, res) => {
        let reminder = {
            id: req.user.reminders.length + 1,
            title: req.body.title,
            description: req.body.description,
            completed: false,
        };
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
        // Implement this code
    },

    delete: (req, res) => {
        let reminderToDelete = req.params.id;
        let searchIndex = req.user.reminders.findIndex(function(reminder) {
            return reminder.id == reminderToDelete
        });
        delete req.user.reminders[searchIndex];
        res.redirect("/reminders");
    },
}

module.exports = remindersController;