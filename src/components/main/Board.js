import user1 from "../../assets/images/userw.png";
import "./Board.css";

function Board({title, dataBoard}){
  console.log("entroa board", dataBoard)

  return (
    <section className="boards">
      <h3 className="boards__title">My Boards</h3>
      <div className="boards__main">
      {
        dataBoard.map((board)=> (
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