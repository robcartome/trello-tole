import { useState } from "react";
import user1 from "../../assets/images/userw.png";
import CloseLine from 'remixicon-react/CloseLineIcon';

function ModalCard({card, onClose, updateCard}){
  const [cardTitle, setCardTitle] = useState(card.name)
  const [cardDescription, setCardDescription] = useState(card.description)
  const handleBlur = () => {
    updateCard({ name: cardTitle, description: cardDescription })
  }
  return (
    <div className = "card-modal">
      <div className = "card-modal__content">
        <div className="card-modal__head">
          <CloseLine cursor="pointer" color="#B1B1B1" size="28px" onClick={()=> onClose()}/>
        </div>
        <div className="card-modal__body">
          <input
            type="text"
            placeholder = "Type title here..."
            defaultValue={cardTitle}
            onChange={(event) => setCardTitle(event.target.value)}
            onBlur={handleBlur}
          />
          <div className="card-modal__description-container">
            <h4>Description:</h4>
            <textarea
              className="card-modal__description-input"
              defaultValue={cardDescription}
              name="description"
              placeholder="Type description here..."
              onChange={(event) => setCardDescription(event.target.value)}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <div className="card-modal__footer">
          <h4>Comments:</h4>
          <ul>
            {
              card.comments.map((comment) => (
                <li>
                  <span className="user-photo user-photo--color">
                  <img src={user1} alt="user" />
                  </span>
                  {comment.description}
                </li>
              ))
            }
          </ul>
          <textarea name="comments" placeholder="Type Comment here..." />
        </div>
      </div>
    </div>
  )
}

export default ModalCard;