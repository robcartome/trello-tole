export const UserSeeder = [
    {
      "userId": 1,
      "name":"YL",
      "boardIds": [1, 2],
    },
    {
      "userId": 2,
      "name":"Otros",
      "boardIds": [3],
    }
];

export const BoardSeeder = [
    {
      "boardId": 1,
      "userId": 1,
      "name": "Todo for today",
      "createAd": "2021-02-14T16:43:47.604Z",
      "listIds": [1, 2,3],
    },
    {
      "boardId": 2,
      "userId": 1,
      "name": "Todo on monday",
      "createAd": "2023-10-19T16:43:47.604Z",
      "listIds": [4],
    },
    {
      "boardId": 3,
      "userId": 2,
      "name": "Todo Board",
      "createAd": "2021-02-14T16:43:47.604Z",
      "listIds": [],
    }
];

export const ListSeeder = [
  {
    "listId": 1,
    "boardId": 1,
    "name": "Todo",
    "cardIds": [2],
  },
  {
    "listId": 2,
    "boardId": 1,
    "name": "In Progress",
    "cardIds": [4, 5],
  },
  {
    "listId": 3,
    "boardId": 1,
    "name": "Completed",
    "cardIds": [6, 7],
    "cards": [
    ],
  },
  {
    "listId": 4,
    "boardId": 2,
    "name": "Todo",
    "cardIds": [3],
  }
]

export const CardsSeeder = [
  {
    "cardId": 2,
    "listId":1,
    "name": "Add Social",
    "description": "Description of Show Social Add Task asfas gasfasgasgasgasg",
    "comments":[
      {
        "commentId": 1,
        "userId": 1,
        "description": "Where Comment user 1"
      },
      {
        "commentId": 2,
        "userId": 2,
        "description": "Where Comment user 2"
      }
    ]
  },
  {
    "cardId": 3,
    "listId":2,
    "name": "Add Social Completed",
    "description": "Create a new route for the App",
    "comments":[
      {
        "commentId": 4,
        "userId": 2,
        "description": "Where Comment user 2"
      }
    ]
  },
  {
    "cardId": 4,
    "listId":2,
    "name": "Add Social Progress",
    "description": "Improve interface design",
    "comments":[
      {
        "commentId": 5,
        "userId": 1,
        "description": "Where Comment user 1"
      },
      {
        "commentId": 6,
        "userId": 2,
        "description": "Where Comment user 2"
      }
    ]
  },
  {
    "cardId": 5,
    "listId": 2,
    "name": "Add Social Progress 2",
    "description": "",
    "comments":[
      {
        "commentId": 7,
        "userId": 1,
        "description": "My Comment user 1"
      },
    ]
  },
  {
    "cardId": 6,
    "listId":3,
    "name": "Add Social Progress 6",
    "description": "",
    "comments":[
      {
        "commentId": 5,
        "userId": 1,
        "description": "My Comment user 1"
      },
      {
        "commentId": 6,
        "userId": 2,
        "description": "Other Comment"
      }
    ]
  },
  {
    "cardId": 7,
    "listId": 3,
    "name": "Add Social Progress 7",
    "description": "",
    "comments":[
      {
        "commentId": 7,
        "userId": 1,
        "description": "My Comment User 1"
      },
    ]
  }
]