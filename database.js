let Database = {
    cindy: {
        id: 1,
        email: "cindy.smith@gmail.com",
        password: "12345678",
        reminders: [{ id: 1, title: "abc", description: "abcabc", completed: false }]
    },
    alex: {
        id: 2,
        email: "alex.johnson@gmail.com",
        password: "12345678",
        reminders: [{ id: 2, title: "haha", description: "uh oh *****, funny", completed: false }]
    }
}

module.exports = Database;