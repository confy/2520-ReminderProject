let Database = [{
        id: 1,
        email: "cindy.smith@gmail.com",
        password: "12345678",
        reminders: [
            { id: 1, title: "Important", description: "Laugh and Cry", completed: false, reminderTime:"2021-04-01T21:30", subtasks: [{id: 1, title:"Laugh", completed: false}, {id: 2, title:"Cry", completed: true}], tags:["potato","carrots"] },
            { id: 2, title: "123", description: "potato", completed: true, reminderTime:"2021-05-01T09:30", subtasks: [], tags:[] },
            { id: 3, title: "zyx", description: "123456789", completed: true, reminderTime:"2021-03-05T21:30", subtasks: [], tags:[]},
            { id: 4, title: "😭", description: "Loudly Crying Face conveys uncontrollable feelings and overwhelming sentiments, ranging from grief and disappointment to hilarity and joy. Its tone is often meant to be hyperbolic.", reminderTime:'', completed: true, subtasks: [], tags:[] }
        ],
        friends: [2],
        profilePic: "https://images.unsplash.com/photo-1617181477990-9be4b33ddec5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjA3Njh8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTc2NjYyODk&ixlib=rb-1.2.1&q=80&h=120"
    },
    {
        id: 2,
        email: "alex.johnson@gmail.com",
        password: "12345678",
        reminders: [
          { id: 2, title: "asdfasednder", description: "123553452", completed: false, reminderTime:"2021-04-01T03:30", subtasks: [], tags:[] },
          { id: 1, title: "Test reminder :)", description: "Haha this is just a test reminder, trust me", completed: false, reminderTime: '', subtasks: [], tags:[]},
          { id: 3, title: "Excuse me", description: "Im sorry sir I'll need some proof of that", completed: true, reminderTime:"2021-05-25T21:30", subtasks: [] , tags:[]}
        ],
        friends: [],
        profilePic: "https://images.unsplash.com/photo-1617181669028-27de15642b18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjA3Njh8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTc2NjMyOTg&ixlib=rb-1.2.1&q=80&h=120"
    },
    {
      id: 3,
      email: "alice.potato@gmail.com",
      password: "12345678",
      reminders: [
        { id: 2, title: "ha67467ha", description: "u896789", completed: false, reminderTime: "2021-08-01T21:30", subtasks: [], tags:[] }
      ],
      friends: [],
      profilePic: "https://images.unsplash.com/photo-1617223777538-5698e655a613?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE3NjcxMzc4&ixlib=rb-1.2.1&q=80&h=120"
  },
  {
    id: 4,
    email: "rillix.kuu@gmail.com",
    password: "12345678",
    reminders: [
      { id: 2, title: "fsdjgiojho2", description: "67893562", completed: false, reminderTime: "2021-04-19T18:30", subtasks: [], tags:[] }
    ],
    friends: [],
    profilePic: "https://images.unsplash.com/photo-1617181669028-27de15642b18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjA3Njh8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTc2NjMyOTg&ixlib=rb-1.2.1&q=80&h=120"
},
]

module.exports = Database;