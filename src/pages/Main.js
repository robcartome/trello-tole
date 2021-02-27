import Header from "../components/main/Header";
import Board from "../components/main/Board";
import { useEffect, useState } from "react";

function Main({ setRoute }) {
  const initialState = {
    "users": [
      {
        "isUser": 1,
        "name":"YF",
      },
      {
        "isUser": 2,
        "name":"RT",
      }
    ],
    "boards": [
      {
        "boardId": 1,
        "userId": 1,
        "name": "Todo Board",
        "createAd": "2021-02-14T16:43:47.604Z",
        "lists": [
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
          }],
      },
      {
        "boardId": 2,
        "userId": 2,
        "name": "Todo Board",
        "createAd": "2021-02-14T16:43:47.604Z",
        "lists": [
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
          }],
      }],
  };

  const [dataBoard, setDataBoard] = useState([initialState]);
  console.log("entro a main", dataBoard[0].boards);
  return (
    <>
      <Header />
      <Board title="My Boards" dataBoard={dataBoard[0].boards}></Board>
 {/*      <Board title="Others Boards"></Board> */}
    </>
  );
}

export default Main;