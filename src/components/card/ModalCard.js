import { useEffect, useState } from "react";
import CloseLine from 'remixicon-react/CloseLineIcon';

function ModalCard({ card, onClose, updateCard }){
  const [cardTitle, setCardTitle] = useState('')
  const [cardDescription, setCardDescription] = useState('')
  const [cardComments, setCardComments] = useState([])
  const [comment, setComment] = useState('')

  useEffect(() => {
    setCardTitle(card.name)
    setCardDescription(card.description)
    setCardComments(card.comments)
  }, [card])

  const handleBlur = (event) => {
    const { name, value } = event.target
    updateCard({ [name]: value})
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    updateCard({ comment }) // comment: comment
    setComment('')
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
            name="name"
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
              cardComments.map((comment) => (
                <li>
                  <span className="user-photo user-photo--color">
                  <img src={`https://i.pravatar.cc/150?u=${comment.userId}`} alt="user" />
                  </span>
                  {comment.description}
                </li>
              ))
            }
          </ul>
          <form onSubmit={handleSubmit}>
            <textarea
              name="comment"
              placeholder="Type Comment here..."
              value={comment}
              onChange={(event) => setComment(event.target.value)}
            />
            <div className="wrapper-button-comment">
              <button type="submit" className="button-comment">
                Add Comment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ModalCard;