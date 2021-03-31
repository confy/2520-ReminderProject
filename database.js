let Database = [{
        id: 1,
        email: "cindy.smith@gmail.com",
        password: "12345678",
        reminders: [
            { id: 1, title: "Important", description: "Laugh and Cry", completed: false, subtasks: [{id: 1, title:"Laugh", completed: false}, {id: 2, title:"Cry", completed: true}] },
            { id: 2, title: "123", description: "potato", completed: true, subtasks: [] },
            { id: 3, title: "zyx", description: "123456789", completed: true, subtasks: [] },
            { id: 4, title: "😭", description: "Loudly Crying Face conveys uncontrollable feelings and overwhelming sentiments, ranging from grief and disappointment to hilarity and joy. Its tone is often meant to be hyperbolic.", completed: true, subtasks: []}
        ],
        friends: [2],
    },
    {
        id: 2,
        email: "alex.johnson@gmail.com",
        password: "12345678",
        reminders: [
          { id: 2, title: "asdfasednder", description: "123553452", completed: false, subtasks: [] },
          { id: 1, title: "Test reminder :)", description: "Haha this is just a test reminder, trust me", completed: false, subtasks: [] },
          { id: 3, title: "Excuse me", description: "Im sorry sir I'll need some proof of that", completed: true, subtasks: [] }
        ],
        friends: [],
    },
    {
      id: 3,
      email: "alice.potato@gmail.com",
      password: "12345678",
      reminders: [
        { id: 2, title: "ha67467ha", description: "u896789", completed: false, subtasks: [] }
      ],
      friends: [],
  },
  {
    id: 4,
    email: "rillix.kuu@gmail.com",
    password: "12345678",
    reminders: [
      { id: 2, title: "fsdjgiojho2", description: "67893562", completed: false, subtasks: [] }
    ],
    friends: [],
},
]

module.exports = Database;