import Header from "../components/main/Header";
import Board from "../components/main/Boards";
import { useEffect, useState } from "react";

function Main({ setRoute }) {
  const initialState = {
    "users": [
      {
        "userId": 1,
        "name":"YL",
      },
      {
        "userId": 2,
        "name":"Otros",
      }
    ],
    "boards": [
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
        "name": "Todo for today",
        "createAd": "2021-02-14T16:43:47.604Z",
        "lists": [],
      },
      {
        "boardId": 3,
        "userId": 2,
        "name": "Todo Board",
        "createAd": "2021-02-14T16:43:47.604Z",
        "lists": [],
      }],
  };

  const listsData = [
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

  const [dataBoard, setDataBoard] = useState([initialState]);
  console.log("entro a main", dataBoard[0].boards);
  return (
    <>
      <Header />
      <Board title="My Boards" currentUser={1} dataBoards={dataBoard[0].boards}></Board>
 {/*      <Board title="Others Boards"></Board> */}
    </>
  );
}

export default Main;