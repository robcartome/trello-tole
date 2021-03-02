import "./Card.css";

function Card({ showCurrentCard, name}){

  return (
    <>
    <li className="card" onClick={()=> showCurrentCard()} >{name}</li>
    </>
  )
}

export default Card;