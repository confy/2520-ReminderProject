let Database = [{
        id: 1,
        email: "cindy.smith@gmail.com",
        password: "12345678",
        reminders: [
            { id: 1, title: "abc", description: "abcabc", completed: false },
            { id: 2, title: "123", description: "potato", completed: true },
            { id: 3, title: "zyx", description: "123456789", completed: true }
        ],
        friends: [],
    },
    {
        id: 2,
        email: "alex.johnson@gmail.com",
        password: "12345678",
        reminders: [
          { id: 2, title: "haha", description: "uh oh *****, funny", completed: false }
        ],
        friends: [],
    }
]

module.exports = Database;