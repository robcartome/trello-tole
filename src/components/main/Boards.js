import user1 from "../../assets/images/userw.png";
import "./Board.css";

function Board({title,currentUser, dataBoards}){
  console.log("entroa board", dataBoards)
  

  return (
    <section className="boards">
      <h3 className="boards__title">My Boards</h3>
      <div className="boards__main">
      {
        dataBoards.map((board)=> (
           currentUser === board.userId ? 
            <div key={board.boardId} className="board">
            <div className="board__body"> {board.name} </div>
            <ul className="board__footer">
              <li className="user-photo user-photo--color">
                <span /><img src={user1} alt="user" />
              </li>
              <li className="user-photo user-photo--color">
                <span /><img src={user1} alt="user" />
              </li>
            </ul>
           </div>
           : ""  
        ))
      }
      </div>

      <h3 className="boards__title">Others Boards</h3>
      <div className="boards__main">
      {
        dataBoards.map((board)=> (
           currentUser !== board.userId ? 
            <div key={board.boardId} className="board">
            <div className="board__body"> {board.name} </div>
            <ul className="board__footer">
              <li className="user-photo user-photo--color">
                <span /><img src={user1} alt="user" />
              </li>
              <li className="user-photo user-photo--color">
                <span /><img src={user1} alt="user" />
              </li>
            </ul>
           </div>
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

export default Board;