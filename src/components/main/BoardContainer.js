import "./BoardContainer.css";
import Board from "../board/Board";

function BoardContainer({currentUser, dataBoards , setGo, setBoardId, setBoardName }){
 /*  console.log("entroa board", dataBoards) */

  return (
    <section className="boards">
      {/* <a onClick={()=>{goto("home")}}>aaa</a> */}
      <h3 className="boards__title">My Boards</h3>
      <div className="boards__main">
      {
        dataBoards.map((board)=> (
           currentUser === board.userId ? 
            <Board key={board.boardId} name = {board.name}  setGo={setGo} setBoardId={()=>setBoardId(board.boardId)} setBoardName ={()=>setBoardName(board.name)}/>
           : ""  
        ))
      }
      </div>
      <h3 className="boards__title">Others Boards</h3>
      <div className="boards__main">
      {
        dataBoards.map((board)=> (
           currentUser !== board.userId ? 
           <Board key={board.boardId} name = {board.name}  setGo={setGo} setBoardId={()=>setBoardId(board.boardId)} setBoardName ={()=>setBoardName(board.name)}/>
           : ""  
        ))
      }
      </div>
    </section>
  )
}

function getUsersComments(board) {
 /* Jalar a todos los usuarios que interactuaron en este board*/
}

export default BoardContainer;