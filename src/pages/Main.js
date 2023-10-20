import { useEffect, useState } from "react";

import BoardContainer from "../components/main/BoardContainer";
import Header from "../components/main/Header";
import ShowBoard from "../components/board/ShowBoard";
import { ListSeeder } from "../seederDataBase";

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

  const [dataBoard, setDataBoard] = useState([initialState]);
  const [lists, setlists]= useState([])

  const [go, setGo] = useState("mainBoards");
  const [currentIdBoard,setBoardId] = useState("");
  const [currentNameBoard,setBoardName] = useState("");
  let currentSection = null;
  let isDisplayNoneClass = "";

  useEffect(() => {
    // setDataBoard(stateLists);
    setlists(ListSeeder);
  }, []);

  const getNextListId = (lists) => {
    // Encontrar el valor máximo de la lista de id's y sumarle 1
    const listId = lists?.map(list => list.listId);
    return Math.max(...listId) + 1;
  }

  const addList = (name, idBoard) => {
    const newList = {
      "listId": getNextListId(lists),
      "boardId": idBoard,
      "name": name,
      "cards": [],
    }
    setlists([...lists, newList]);
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
      const listByBoard = lists.filter(list => list.boardId === currentIdBoard );
      currentSection = <ShowBoard
                          setGo = {()=>setGo("mainBoards")}
                          nameBoard = {currentNameBoard}
                          addList={addList}
                          idBoard={currentIdBoard}
                          listData={listByBoard}
                        />;
      break;
    default:
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