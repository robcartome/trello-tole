import { useState } from "react";
import AddLine from 'remixicon-react/AddLineIcon';
import AddForm from '../UI/forms/AddForm';
import List from '../List/List';
import user1 from "../../assets/images/userw.png";

import "./ShowBoard.css";


function ShowBoard({setGo, idBoard, list, nameBoard, addList}){
  const [ showAddFormList, setShowAddList ] = useState(false);
  return (
    <section className="lists-container">
      {showAddFormList && (
        <AddForm titleButton={"Create List"} onCancel={() => setShowAddList(false)} addList={addList} idBoard={idBoard}/>
      )}
      <h3 className="boards__title">{nameBoard}</h3>
      <ul className="lists-container__head">
        <li className="user-photo ">
          <AddLine color="#fff" />
        </li>
        <li className="user-photo user-photo--color">
          <span /><img src={user1} alt="user" />
        </li>
        <li className="user-photo user-photo--color">
          <span /><img src={user1} alt="user" />
        </li>
      </ul>

      <ul className="lists-container__main">
        <li className="button-add" onClick={()=>setShowAddList(true)}>
          <AddLine color="#fff" />
        </li>
        {
          list.map(list => <List key={list.listId} dataList={list} />)
        }
      </ul>
    </section>
  )
}

export default ShowBoard;