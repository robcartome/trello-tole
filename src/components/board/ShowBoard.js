import AddLine from 'remixicon-react/AddLineIcon';
import user1 from "../../assets/images/userw.png";
import List from '../list/List';
import "./ShowBoard.css";
import { useState } from "react";
import ShowCard from "../card/ShowCard";
import AddForm from '../UI/forms/AddForm';

function ShowBoard({setGo, listData, nameBoard, addList, idBoard}){
  const [ currentCard, setCurrentCard ] = useState(null);
  const [ showAddFormList, setShowAddList ] = useState(false);
  /* console.log("ss-", currentCard) */
  const showModalCard = () => {
    return (currentCard && (<ShowCard  setCurrentCard= {setCurrentCard}/>)
    );
  }

  return (
    <section className="lists-container">
      {showAddFormList && (
        <AddForm titleButton={"Create List"} onCancel={() => setShowAddList(false)} addList={addList} idBoard={idBoard}/>
      )}
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
        <li className="button-add" onClick={()=>setShowAddList(true)}><AddLine color="#fff" /></li>
        {
          listData.map(list => <List key={list.listId} dataList={list} setCurrentCard = {setCurrentCard}/>)
        }
      </ul>

      { showModalCard() }

    </section>
  )
}

export default ShowBoard;