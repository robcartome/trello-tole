import "./List.css";
import Card from "../card/Card";
import AddLine from 'remixicon-react/AddLineIcon';

function List({dataList, setCurrentCard }){
 /*  console.log(setCurrentCard ) */
  return <li className="list">
            <div className="list__header">
              <h2  className="">{dataList.name}</h2>
            </div>
            <ul className="list__body">
              {
                dataList.cards.map((card)=><Card key={card.cardId} showCurrentCard = {()=>setCurrentCard("card")} {...card} /> )
              }
            </ul>
            <div className="list__footer">
              <AddLine color="#AAACAF" /> Add new Card
            </div>

          </li>
}

export default List;