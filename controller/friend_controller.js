const getUserById = require('./userController.js').getUserById

let friendsController = {
  list: (req, res) => {
    let friends = []

    req.user.friends.forEach( friend => {
      let user = getUserById(friend)
      friends.push({
        email: user.email,
        amount: user.reminders.length
      })
    })
    res.render("friend/friends", { friends: friends })
  }
}

module.exports =friendsController