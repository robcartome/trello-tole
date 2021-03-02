import AddLine from 'remixicon-react/AddLineIcon';
import user1 from "../../assets/images/userw.png";
import List from '../list/list';
import "./ShowBoard.css";

function ShowBoard({setGo, listData, nameBoard}){
  return ( 
    <section className="lists-container">
      <h3 className="boards__title">{nameBoard}</h3>
      <ul className="lists-container__head">
        <li className="user-photo "><AddLine color="#fff" /></li>
        <li className="user-photo user-photo--color">
          <span /><img src={user1} alt="user" />
        </li>
        <li className="user-photo user-photo--color">
          <span /><img src={user1} alt="user" />
        </li>
      </ul>

      <ul className="lists-container__main">
        <li className="button-add"><AddLine color="#fff" /></li>
        {
          listData.map(list => {
            
          return (
              <List key={list.listId} dataList={list}/>
            )

          })
        }  
      </ul>


      
    </section>
  )
}

export default ShowBoard;