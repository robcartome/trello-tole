import "./Card.css";

function Card({ onClick, name}){
  return <li className="card" onClick={onClick} >{name}</li>
}

export default Card;