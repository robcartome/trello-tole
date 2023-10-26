import "./List.css";
import Card from "../card/Card";
import AddLine from 'remixicon-react/AddLineIcon';
import { CardsSeeder } from "../../utils/seederDataBase";

function List({dataList, setSelectCard, onClickSelectCard }){
  const filterCards = CardsSeeder.filter(card => dataList.cardIds.includes(card.cardId));
  return <li className="list">
            <div className="list__header">
              <h2  className="">{dataList.name}</h2>
            </div>
            <ul className="list__body">
              {
                filterCards.map((card) =>
                {
                  console.log('card', card)
                  return <Card
                    key={card.cardId}
                    onClick={() => onClickSelectCard(card)}
                    name={card.name}
                  />
                }
                )
              }
            </ul>
            <div className="list__footer">
              <AddLine color="#AAACAF" /> Add new Card
            </div>

          </li>
}

export default List;