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
  }, []);

  const onClickSelectCard = (card) => {
    setSelectCard(card);
    setShowModalCard(true);
  };
  const closeModalCard = () => {setShowModalCard(false)};
  const updateCard = ({ name, description, comment }) => {
    const updatedCards = cards.map((card) => {
      const updatedCard = {...card} // Copia superficial de la tarjeta
      if (card.cardId === selectCard.cardId) {
        if (comment) {
          const newComment = {
            commentId: getNextCommentId(cards),
            userId: 1,
            description: comment,
          }
          updatedCard.comments = [...updatedCard.comments, newComment]
        };
        const newUpdateCard = {
          ...updatedCard,
          name,
          description,
        }
        setSelectCard(newUpdateCard)
        return newUpdateCard
      }
      return card;
    });
    setCards(updatedCards);
  };
  const filterCards = cards.filter(card => dataList.cardIds.includes(card.cardId));

  return (
    <>
      <li className="list">
        <div className="list__header">
          <h2 className="">{dataList.name}</h2>
        </div>
        <ul className="list__body">
          {filterCards.map((card) => {
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

const getNextCommentId = (cards) => {
  let commentIds = [];
  cards?.forEach(card => {
    const commentIdsByCard = card.comments.map((comment) => comment.commentId)
    commentIds.push(...commentIdsByCard) // Merging arrays
  });

  /* // Otro modo usando flat
  const commentIds = CardsSeeder.map(card => card.comments.map(comment => comment.commentId));
  // Flatten el array resultante
  const flatCommentIds = commentIds.flat(); */

  return Math.max(...commentIds) + 1;
}

export default List;