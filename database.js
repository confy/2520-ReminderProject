let Database = [{
        id: 1,
        email: "cindy.smith@gmail.com",
        password: "12345678",
        reminders: [
            { id: 1, title: "abc", description: "abcabc", completed: false, reminderTime: "2021-03-01T08:30" },
            { id: 2, title: "123", description: "potato", completed: true, reminderTime: "2021-04-01T07:30" },
            { id: 3, title: "zyx", description: "123456789", completed: true, reminderTime: '' }
        ],
        friends: [2],
    },
    {
        id: 2,
        email: "alex.johnson@gmail.com",
        password: "12345678",
        reminders: [
          { id: 2, title: "asdfasednder", description: "123553452", completed: false, reminderTime: "2021-04-01T10:30" },
          { id: 1, title: "Test reminder :)", description: "Haha this is just a test reminder, trust me", completed: true, reminderTime: "2021-04-19T08:30" },
        ],
        friends: [],
    },
    {
      id: 3,
      email: "alice.potato@gmail.com",
      password: "12345678",
      reminders: [
        { id: 2, title: "ha67467ha", description: "u896789", completed: false, reminderTime: "2021-08-01T21:30" }
      ],
      friends: [],
  },
  {
    id: 4,
    email: "rillix.kuu@gmail.com",
    password: "12345678",
    reminders: [
      { id: 2, title: "fsdjgiojho2", description: "67893562", completed: false, reminderTime: "2021-04-19T18:30" }
    ],
    friends: [],
},
]

module.exports = Database;