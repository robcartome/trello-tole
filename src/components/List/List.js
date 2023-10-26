import { useEffect, useState } from "react";
import "./List.css";
import AddLine from 'remixicon-react/AddLineIcon';
import Card from "../card/Card";
import ModalCard from "../card/ModalCard";
import { CardsSeeder } from "../../utils/seederDataBase";

function List({dataList}){
  const [ cards, setCards ] = useState([]);
  const [ showModalCard, setShowModalCard ] = useState(false);
  const [ selectCard, setSelectCard ] = useState(null);

  useEffect(() => {
    setCards(CardsSeeder);
  }, [])

  const onClickSelectCard = (card) => {
    setSelectCard(card);
    setShowModalCard(true);
  }
  const closeModalCard = () => {setShowModalCard(false)}
  const updateCard = ({ name, description }) => {
    const updateCards = cards.map((card) => {
      if (card.cardId === selectCard.cardId) {
        return {...card, "name" : name, "description" : description }
      }
      return card
    });
    setCards(updateCards);
  }
  const filterCards = cards.filter(card => dataList.cardIds.includes(card.cardId));

  return (
    <>
      <li className="list">
        <div className="list__header">
          <h2 className="">{dataList.name}</h2>
        </div>
        <ul className="list__body">
          {filterCards.map((card) => {
            console.log("card", card);
            return (
              <Card
                key={card.cardId}
                onClick={() => onClickSelectCard(card)}
                name={card.name}
              />
            );
          })}
        </ul>
        <div className="list__footer">
          <AddLine color="#AAACAF" /> Add new Card
        </div>
      </li>

      {showModalCard && (
        <ModalCard
          onClose={closeModalCard}
          card={selectCard}
          updateCard={updateCard}
        />
      )}
    </>
  );
}

export default List;