import user1 from "../../assets/images/userw.png";
import "./Board.css";

function Board({ currentUser, name, setGo, setBoardId, setBoardName }){
  return (
    <div className="board">
      <div className="board__body" onClick={()=>{
        setBoardId();
        setBoardName();
        setGo("board")    
      }}> 
      {name} 
      </div>
      <ul className="board__footer">
        <li className="user-photo user-photo--color">
          <span /><img src={user1} alt="user" />
        </li>
        <li className="user-photo user-photo--color">
          <span /><img src={user1} alt="user" />
        </li>
      </ul>
    </div>
  )
}

function getUsersComments(board) {
 /* Jalar a todos los usuarios que interactuaron en este board*/
}

export default Board;