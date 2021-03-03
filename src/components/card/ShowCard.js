import user1 from "../../assets/images/userw.png";
import CloseLine from 'remixicon-react/CloseLineIcon';

function ShowCard({setCurrentCard }){
  return (
    <div className = "card-modal">
      <div className = "card-modal__content">
        <div className="card-modal__head"><CloseLine cursor="pointer" color="#B1B1B1" size="28px" onClick={()=> setCurrentCard("")}/></div>
        <div className="card-modal__body">
          <input type="text" placeholder = "title"/> 
          <div className="add-modal-area">
            <h4>Description</h4>
            <textarea  name="description" placeholder="Type description here..." />
          </div>
        </div>
        <div className="card-modal__footer">
          <h4>Comments</h4>
          <ul>
            <li>
              <span className="user-photo user-photo--color">
              <img src={user1} alt="user" />
              </span>
              Lorem Comments1
            </li>
            <li>
              <span className="user-photo user-photo--color">
              <img src={user1} alt="user" />
              </span>
              Lorem Comments2
            </li>
          </ul>
          <textarea name="comments" placeholder="Type Comment here..." />
        </div>
      </div>
    </div>
  )
}

export default ShowCard;