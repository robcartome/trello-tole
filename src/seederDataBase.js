export const UserSeeder = [
    {
      "userId": 1,
      "name":"YL",
    },
    {
      "userId": 2,
      "name":"Otros",
    }
];

export const BoardSeeder = [
    {
      "boardId": 1,
      "userId": 1,
      "name": "Todo for today",
      "createAd": "2021-02-14T16:43:47.604Z",
      "lists": [],
    },
    {
      "boardId": 2,
      "userId": 1,
      "name": "Todo on monday",
      "createAd": "2023-10-19T16:43:47.604Z",
      "lists": [],
    },
    {
      "boardId": 3,
      "userId": 2,
      "name": "Todo Board",
      "createAd": "2021-02-14T16:43:47.604Z",
      "lists": [],
    }
];

export const ListSeeder = [
  {
    "listId": 1,
    "boardId": 1,
    "name": "Todo",
    "cards": [
      {
        "cardId": 2,
        "listId":1,
        "name": "Add Social",
        "comments":[
          {
            "commentId": 1,
            "userId": 1,
            "description": "Where Comment"
          },
          {
            "commentId": 2,
            "userId": 2,
            "description": "Where Comment"
          }
        ]
      }
    ],
  },
  {
    "listId": 2,
    "boardId": 1,
    "name": "In Progress",
    "cards": [
      {
        "cardId": 4,
        "listId":2,
        "name": "Add Social Progress",
        "comments":[
          {
            "commentId": 5,
            "userId": 1,
            "description": "Where Comment"
          },
          {
            "commentId": 6,
            "userId": 2,
            "description": "Where Comment"
          }
        ]
      },
      {
        "cardId": 5,
        "listId": 2,
        "name": "Add Social Progress 2",
        "comments":[
          {
            "commentId": 7,
            "userId": 1,
            "description": "My Comment "
          },
        ]
      }
    ],
  },
  {
    "listId": 3,
    "boardId": 1,
    "name": "In Progress",
    "cards": [
      {
        "cardId": 6,
        "listId":3,
        "name": "Add Social Progress",
        "comments":[
          {
            "commentId": 5,
            "userId": 1,
            "description": "Where Comment"
          },
          {
            "commentId": 6,
            "userId": 2,
            "description": "Where Comment"
          }
        ]
      },
      {
        "cardId": 7,
        "listId": 3,
        "name": "Add Social Progress 2",
        "comments":[
          {
            "commentId": 7,
            "userId": 1,
            "description": "My Comment "
          },
        ]
      }
    ],
  },
  {
    "listId": 4,
    "boardId": 2,
    "name": "Todo",
    "cards": [
      {
        "cardId": 3,
        "listId":2,
        "name": "Add Social",
        "comments":[
          {
            "commentId": 4,
            "userId": 2,
            "description": "Where Comment"
          }
        ]
      }
    ],
  }
]