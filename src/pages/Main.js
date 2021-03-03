import Header from "../components/main/Header";
import BoardContainer from "../components/main/BoardContainer";
import { useEffect, useState } from "react";
import ShowBoard from "../components/board/ShowBoard";

function Main({ goto }) {
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

  const stateLists = JSON.parse(localStorage.getItem("dataList")) || [];
  const [dataLists, setDataLists]= useState(listsData)

  //const [dataLists, setDataLists]= useState(listsData)
  /* console.log("entro a main", dataBoard[0].boards); */
  const [go, setGo] = useState("mainBoards");
  const [currentIdBoard,setBoardId] = useState("");
  const [currentNameBoard,setBoardName] = useState("");
  let currentSection = null;
  let isDisplayNoneClass = "";

  useEffect(async () => {
    localStorage.setItem("dataList", JSON.stringify(dataLists));
  }, [dataLists]);

  function addList(name, idNewList, idBoard){
    console.log(idBoard, idNewList, name);
    const obj = {
      "listId": idNewList,
      "boardId": idBoard,
      "name": name,
      "cards": [],
    }
    listsData.push(obj);
    setDataLists(listsData);
    /* console.log(copialist); */
  }

  switch (go) {
    case "mainBoards":
      isDisplayNoneClass = "notVisible";
      currentSection = <BoardContainer 
      currentUser={1} 
      dataBoards={dataBoard[0].boards} 
      setGo = {setGo} 
      setBoardId = {setBoardId}
      setBoardName = {setBoardName} />;
      break;
    case "board":
      const listData = dataLists.filter(list => list.boardId === currentIdBoard );
      currentSection = <ShowBoard setGo = {()=>setGo("mainBoards")} listData = {listData} nameBoard = {currentNameBoard} addList={addList} idBoard={currentIdBoard}/>;
      break;
  }

  return (
    <>
      <Header setGoMain = {()=>setGo("mainBoards")} isVisibleHouse = {isDisplayNoneClass} />
      { currentSection }
    </>
  );
}

export default Main;