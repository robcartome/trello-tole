import "./List.css";
import Card from "./Card";
import AddLine from 'remixicon-react/AddLineIcon';

function List({dataList}){
  console.log(dataList)
  return <li className="list">
            <div className="list__header">
              <h2  className="">{dataList.name}</h2>
            </div>
            <ul className="list__body">
              {
                dataList.cards.map((card)=><Card key={card.cardId} {...card} /> )
              }
            </ul>
            <div className="list__footer">
              <AddLine color="#AAACAF" /> Add new Card
            </div>
          </li>
}

export default List;